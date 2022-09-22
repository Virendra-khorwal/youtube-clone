import { createTheme, ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
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
      <div className="App">
        <ThemeProvider>
          
        </ThemeProvider>
        <Router>
          <Navbar />
          <SideNav/>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
