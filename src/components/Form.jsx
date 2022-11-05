import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
    return (
        <Box
            style={{ marginTop: '5%' }}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="Id"
                    label="ID"
                    defaultValue=""

                />
                <TextField
                    required
                    id="Turn"
                    label="Turno"
                    defaultValue=""

                />
            </div>
            <div>
                <TextField
                    required
                    id="Name"
                    label="Nombre"
                    defaultValue=""

                />
                <TextField
                    required
                    id="LastName"
                    label="Apellido"
                    defaultValue=""

                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-error-helper-text"
                    label="Cedula"
                    defaultValue=""

                />
                <TextField
                    required
                    id="outlined-error-helper-text"
                    label="Telefono"
                    defaultValue=""

                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-error-helper-text"
                    label="Correo"
                    defaultValue=""

                />
                <TextField
                    required
                    id="outlined-error-helper-text"
                    label="Empresa"
                    defaultValue=""

                />
            </div>
        </Box>
    );




}

const signature = 'PjLI0JVShJahEGYOnwDkiO7AxDKmRIoAljjl8tBYARA='
const key = '26057305'
const signatureHeaders = 'x-ca-key'


const sendData = () => {
  
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

const  addData = () => {
const data= {
        "personCode": "1",
        "personFamilyName": "Solis",
        "personGivenName": "Kendall",
        "gender": 1,
        "orgIndexCode": "1",
        "remark": "description",
        "phoneNo": "60671637",
        "email": "person1@qq.com",
        "faces": [
            {
                "faceData": ""
            }
        ],
        "beginTime": "2020-05-26T15:00:00+08:00",
        "endTime": "2030-05-26T15:00:00+08:00"
    }
}