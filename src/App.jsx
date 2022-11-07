import './App.css';
import { Typography } from '@mui/material';
import Form from './components/Form';
import BasicTable from './components/Table';

function App() {
  return (
    <div className="App">
      <Typography style={{ marginTop: '50px', color: 'blue', fontSize: '60px' }} variant="h1" >Ingreso de Empleados</Typography>
      <Form />
    </div>
  );
}

  export default App;
