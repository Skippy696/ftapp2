import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const BasicTable = (props) => {
    const { data } = props;
    const searchData = () => {

        const signature = '3+RbdU8Nz2gaA9jRDCFBbOhygSMIcKKJBIbGIBr0IjE='
        const key = '26057305'
        const signatureHeaders = 'x-ca-key';

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
                const jsonData = data.data.map((item) => {
                    return {
                        id: item.personId,
                        name: item.personName,
                        date: item.eventTime,
                        door: item.doorName,
                        type: item.eventType,
                        status: item.status
                    }
                })
                filterData(jsonData)
                BasicTable(jsonData)
            }).catch(error => console.log(error))


    }


    const filterData = (data) => {
        // sumar todos los registros
        const total = data.length
        // filtrar por tipo de evento
        const event = data.filter((item) => item.type === 196893)
        const dataFilter = {
            total,
            event
        }
        console.log(dataFilter)
    }

   
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Hora Entrada</TableCell>
                        <TableCell align="right">Puerta</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                        <TableCell align="right">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.list.id}</TableCell>
                            <TableCell align="right">{row.list.name}</TableCell>
                            <TableCell align="right">{row.list.date}</TableCell>
                            <TableCell align="right">{row.list.door}</TableCell>
                            <TableCell align="right">{row.list.type}</TableCell>
                            <TableCell align="right">{row.list.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}


export default BasicTable;