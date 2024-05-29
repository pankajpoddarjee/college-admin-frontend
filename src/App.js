import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import Colleges from './pages/college/Colleges';
import AddCollege from './pages/college/Add';

function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/college/add" element={<AddCollege />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
