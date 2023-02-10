import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import Read from './Read';
import { useNavigate } from 'react-router-dom';


function Create() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // function handleOnclick1() {
  //   console.log(firstName);
  //   console.log(lastName);

  //   // sendDatoToAPI();
  //   // getAPI();
  //   // window.location.reload(true);
  // }

  // const getAPI = () => {
  //   axios.get("https://63e3ed12619fce55d424ba5dd.mockapi.io/CRUDOperations").then((res) => {
  //     console.log(res.data);
  //   })
  // }

  const handleOnclick = () => {
    axios.post("https://63e3ed12619fce55d424ba5dd.mockapi.io/CRUDOperations",
      {
        firstName,
        lastName
      }
    ).then((res) => {
      console.log(res.data);
      navigate("/read");
    })
  }


  return (<div>
    <Form className="container">
      <Form.Field>
        <label>First Name</label>
        <input onChange={(e) => setFirstName(e.target.value)} style={{ width: 550 }} placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input onChange={(e) => setLastName(e.target.value)} style={{ width: 550 }} placeholder='Last Name' />
      </Form.Field>
      <Button type='submit' style={{ color: "green" }} onClick={handleOnclick}>Submit</Button>
    </Form>
    <div></div>
    <div style={{ paddingTop: 20 }}>
      <Read />
    </div>
  </div>

  )
}

export default Create

