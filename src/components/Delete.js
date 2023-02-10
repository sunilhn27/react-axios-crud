// import React, { useEffect } from 'react'
// import 'semantic-ui-css/semantic.min.css';
// import { Button, Form } from 'semantic-ui-react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Delete() {

//     const navigate = useNavigate();
//     // const [firstName, setFirstName] = useState("");
//     // const [lastName, setLastName] = useState("");
//     const [ID, setID] = useState(null);

//     useEffect(() => {
//         console.log("inside useeffects")
//         axios.get("https://63e3ed12619fce55d424ba5d.mockapi.io/CRUDOperations").then(res => {
//             console.log("Data " + res.data);

//         })
//     }, []);

//     function onDelete() {
     
//         sendDatoToAPI();
//     }

//     // useEffect(() => {
//     //     setFirstName(localStorage.getItem("firstName"))
//     //     setLastName(localStorage.getItem("lastName"))
//     //     setID(localStorage.getItem('ID'))

//     // }, [])


//     const sendDatoToAPI = () => {
//         axios.delete(`https://63e3ed12619fce55d424ba5d.mockapi.io/CRUDOperations/${ID}`).then(() => {

//             navigate("/read");
//         })
//     }


//     return (<div>
//         <Form>
//             <Form.Field>
//                 <label>First Name</label>
//                 <input value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: 550 }} placeholder='First Name' />
//             </Form.Field>
//             <Form.Field>
//                 <label>Last Name</label>
//                 <input value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: 550 }} placeholder='Last Name' />
//             </Form.Field>
//             <Button type='submit' style={{ color: "green" }} onClick={onDelete}>Delete</Button>
//         </Form>
//     </div>
//     )
// }

// export default Delete

