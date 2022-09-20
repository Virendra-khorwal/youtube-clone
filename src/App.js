import { createTheme, ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    background: {
      primaryColor: '#181818',
      secondaryColor: '#212121',
      accentColor: '#383838',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
