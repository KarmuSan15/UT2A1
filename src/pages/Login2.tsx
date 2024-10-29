import { Typography, Container, Button, Paper, Box, TextField, IconButton } from '@mui/material';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

function Login2() {
  const [data, setData] = useState({ usuario: '', contraseña: '', corresponden: 0 });
  const bduser = 'Toruh';
  const bdpasswd = 'Toruh';
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.usuario === bduser && data.contraseña === bdpasswd) {
      setData({ ...data, corresponden: 1 });
      console.log("Usuario: " + data.usuario + ", Contraseña: " + data.contraseña);
      navigate("/Home");
    } else {
      setData({ ...data, corresponden: 2 });
      console.log("Usuario: " + data.usuario + ", Contraseña: " + data.contraseña);
    }
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, usuario: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, contraseña: e.target.value });
  };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Paper elevation={3} square={true} sx={{ textAlign: 'center', padding: "7px" }}>
        <Typography variant='h5' color="primary">Sistema de acceso</Typography>
        <IconButton color="primary">
          <LockIcon />
        </IconButton>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Usuario"
                variant='outlined'
                fullWidth
                value={data.usuario}
                onChange={handleChangeUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Contraseña"
                variant='outlined'
                fullWidth
                value={data.contraseña}
                type='password'
                onChange={handleChangePassword}
              />
            </Grid>
          </Grid>
          <Button 
            sx={{ padding: "10px", marginTop: "10px" }} 
            variant='contained' 
            fullWidth 
            type='submit'
            color="primary"
          >
            Acceder
          </Button>
          {data.corresponden !== 0 && (
            data.corresponden === 1 ? (
              <Alert severity="success">Acceso concedido</Alert>
            ) : (
              <Alert severity="error">Usuario y/o contraseña incorrecta</Alert>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login2;
