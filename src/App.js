import { Container, Button, } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import './App.css';
import theme from './styles/theme';

function App() {

  useEffect(() => {
    document.title = "React MUI";
  }, [])
  return (
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='xl'
          sx={{
            background: "#fff"
          }}
        >
          <h1>Hello World</h1>
          <Button variant='contained'>Test</Button>
        </Container>
      </ThemeProvider>
  );
}

export default App;
