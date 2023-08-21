import { Container, Button, } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import './App.css';
import Appbar from './components/appbar';
import Banner from './components/banner';
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
          <Appbar />
          <Banner />
        </Container>
      </ThemeProvider>
  );
}

export default App;
