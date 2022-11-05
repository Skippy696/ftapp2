import './App.css';
import BasicTable from './components/Table';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import Form from './components/Form';

const signature = '3+RbdU8Nz2gaA9jRDCFBbOhygSMIcKKJBIbGIBr0IjE='
const key = '26057305'
const signatureHeaders = 'x-ca-key'
 

// material ui import
function App() {
  return (
    <div className="App">
    <Button style={{background:'green', marginTop:'50px'}}  variant="contained" onClick={searchData()}>Buscar</Button>
    <Typography style={{marginTop:'50px',color:'blue', fontSize:'60px'}} variant="h1" >Ingreso de Empleados</Typography> 
    <Form />


     

    </div>
  );
}

const searchData = () => {
  
  const body = {
    "startTime": "2022-10-20T15:00:00+08:00",
    "endTime": "2022-11-01T15:00:00+08:00",
    "eventType": 196893,
    "doorIndexCodes": [
        "23"
    ],
    "pageNo": 1,
    "pageSize": 10
  }
  const url = 'https://44.226.167.146/artemis/api/acs/v1/door/events'


fetch(url, {
    method: 'POST',
    headers: {
        'x-ca-key': key,
        'x-ca-signature': signature,
        'x-ca-signature-headers': signatureHeaders,
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000',
        body: JSON.stringify(body)
    },
    body: JSON.stringify(body),
})
    .then(response => response.json())
    .then((data) => {
        console.log(data.data.list)
    })

    .catch(error => console.log(error))

}


export default App;
