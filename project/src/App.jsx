import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Headerbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Monitoring from './Pages/Monitoring';
import CycleTime from './Pages/CycleTime';

function Layout({ children, isLoggedIn }) {
  return (
    <div className="w-screen h-screen flex bg-gray-100">
      {isLoggedIn && (
        <div className="w-60 bg-white">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 flex flex-col">
        {isLoggedIn && <Header />}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  const PrivateRoute = ({ children }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/monitoring"
            element={
              <PrivateRoute>
                <Monitoring />
              </PrivateRoute>
            }
          />
          <Route
            path="/cycletime"
            element={
              <PrivateRoute>
                <CycleTime />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
