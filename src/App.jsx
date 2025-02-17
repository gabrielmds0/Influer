import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import Dashboard from './components/dashboard/dashboard';
import MarketingLayout from './components/layouts/MarketingLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import { AuthProvider } from './context/AuthContext';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes with marketing layout */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected routes with dashboard layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
