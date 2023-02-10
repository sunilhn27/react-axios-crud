import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'


function Read() {

    const [getAPIData, setAPIData] = useState([]);


    useEffect(() => {
        console.log("inside useeffects")
        axios.get("https://63e3ed12619fce55d424ba5d.mockapi.io/CRUDOperations").then(res => {
            setAPIData(res.data);

        })
    }, []);

    function setData(id, firstName, lastName) {
        console.log("ID " + id + "firstName" + firstName + "lastName" + lastName)
        localStorage.setItem("ID", id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    }

    const getData = () => {
        axios.get(`https://63e3ed12619fce55d424ba5d.mockapi.io/CRUDOperations`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63e3ed12619fce55d424ba5d.mockapi.io/CRUDOperations/${id}`)
            .then(() => {
                getData();
               // navigate("/read")
            })
    }





    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {getAPIData.map(data => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell >
                                <Link to="/update">
                                    <Button style={{ color: 'Green' }} onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell >
                                    <Button style={{ color: 'Red' }} onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>

                        </Table.Row>
                    ))}


                </Table.Body>

            </Table>
        </div>
    )
}

export default Read
