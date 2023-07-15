//import styles from './page.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
  <div>
    <h1>Controle de patrimônio - LIPSI</h1>
    <TextField id="outlined-basic" label="Teste" variant="outlined" />
    <Button variant="contained" sx={{
      marginLeft: 5,
    }}>Teste</Button>
  </div>
  )
}
