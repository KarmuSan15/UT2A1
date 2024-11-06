import { Typography, Container, Button, Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { authActions } from '../store/authSlice';

function Home() {
  const userData = useSelector((state: RootState) => state.authenticator);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '20px', 
          width: '100%', 
          maxWidth: '600px', 
          textAlign: 'center',
          backgroundColor: 'background.default', // Usamos el color de fondo del tema
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Bienvenido, {userData.userName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Rol: {userData.userRole}
          </Typography>
        </Box>
        <Typography variant="h5" color="secondary" gutterBottom>
          Página Home de Toruh
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ mt: 2 }}
        >
          Salir
        </Button>
      </Paper>
    </Container>
  );
}

export default Home;
