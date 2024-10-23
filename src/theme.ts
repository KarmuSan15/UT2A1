import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8', // Azul con buen contraste
    },
    secondary: {
      main: '#ffc107', // Amarillo accesible
    },
    error: {
      main: '#d32f2f', // Rojo con contraste alto
    },
    success: {
      main: '#388e3c', // Verde accesible
    },
    warning: {
      main: '#f57c00', // Naranja accesible
    },
    text: {
      primary: '#212121', // Texto oscuro en fondos claros
      secondary: '#757575', // Texto secundario accesible
    },
    background: {
      default: '#fafafa', // Fondo claro y accesible
    },
  },
};
