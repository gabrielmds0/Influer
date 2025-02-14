import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
