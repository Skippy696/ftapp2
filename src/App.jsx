import './App.css';
import BasicTable from './components/Table';
import { Button } from '@mui/material';
import { useState } from 'react';
import ValidationTextFields from './components/Form';

const signature = '3+RbdU8Nz2gaA9jRDCFBbOhygSMIcKKJBIbGIBr0IjE='
const key = '26057305'
const signatureHeaders = 'x-ca-key'


// material ui import
function App() {
  const [rows, setRows] = useState();
  return (
    <div className="App">
      <BasicTable props={rows} />
      <Button style={{ marginTop: 50, marginBottom: 50, background: 'green', fontSize: 20 }} variant="contained" className='btnSearch' onClick={searchData}>Buscar</Button>
      <ValidationTextFields />



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

    })

    .catch(error => console.log(error))

}


export default App;
