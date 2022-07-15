import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ExerciseDetail from './pages/Exercise/ExerciseDetail';
import Home from './pages/Home/Home';

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'} }} m="auto">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
