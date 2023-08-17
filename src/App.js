import { Button } from '@mui/base';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "React MUI";
  }, [])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button>Test</Button>
    </div>
  );
}

export default App;
