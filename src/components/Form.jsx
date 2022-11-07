import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';




const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        sendData(data);
    }
    const signature = 'PjLI0JVShJahEGYOnwDkiO7AxDKmRIoAljjl8tBYARA='
    const key = '26057305'
    const signatureHeaders = 'x-ca-key'


    const sendData = () => {

       
        const url = 'https://44.226.167.146/artemis/api/resource/v1/person/single/add'

        const body = {
           
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'x-ca-key': key,
                'x-ca-signature': signature,
                'x-ca-signature-headers': signatureHeaders
            },
            body:
            {
                "personCode": "10000",
                "personFamilyName": "a",
                "personGivenName": "b",
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
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <Box
            style={{ marginTop: '5%' }}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit(), sendData())}
        >
            <div>
                <TextField
                    required
                    label="ID"
                    type={'number'}
                    {...register('id', {
                        required: true,
                        number: true,
                    })}
                />
                <div />
                {errors.id?.type === 'required' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un ID</span>}
                {errors.id?.type === 'number' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo debe ser un numero</span>}
                <div>
                    <TextField
                        required
                        label="Nombre"
                        type={'text'}
                        {...register('name', {
                            required: true,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    <div />
                    <div>
                        {errors.name?.type === 'required' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Nombre</span>}
                        {errors.name?.type === 'pattern' && <span style={{ color: 'red', fontStyle: 'bold' }} >Error, solo se permiten letras</span>}
                    </div>
                    <div>
                        <TextField
                            required
                            label="Apellido"
                            type={'text'}
                            {...register('lastName', {
                                required: true, fontStyle: 'bold',
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                    </div>

                    {errors.lastName?.type === 'required' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Apellido</span>}
                    {errors.lastName?.type === 'pattern' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Apellido</span>}
                    <div>
                        <TextField
                            required
                            id={register('phone')}
                            label="Teléfono"
                            type={'number'}
                            {...register('phone', {
                                required: true,
                                pattern: /^[0-9]+$/i
                            })}
                        />
                    </div>
                    <div>
                        {errors.phone?.type === 'required' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Teléfono</span>}
                    </div>
                    <div>
                        {errors.phone?.type === 'pattern' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Teléfono</span>}
                    </div>
                    <div>
                        <TextField
                            required
                            id={register('email')}
                            label="Correo"
                            type={'email'}
                            {...register('email', {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            })}
                        />
                    </div>
                    <div>
                        {errors.email?.type === 'required' && <span style={{ color: 'red', fontStyle: 'bold' }} >Este campo es requerido, Agrega un Correo</span>}
                    </div>
                    <div>
                        {errors.email?.type === 'pattern' && <span style={{ color: 'red', fontStyle: 'bold' }} >Error en el formato del correo</span>}
                        <div>
                            <Button type='submit' style={{ background: 'green', marginTop: '50px', color: 'white' }} >Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}






export default Form;