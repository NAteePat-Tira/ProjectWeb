import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Headerbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Monitoring from './Pages/Monitoring';
import CycleTime from './Pages/CycleTime';
import Production_Overview from './Pages/Overview';

function Layout({ children, isLoggedIn }) {
  return (
    <div className="w-screen h-screen flex bg-gray-100">
      {/* Sidebar - only visible if logged in */}
      {isLoggedIn && (
        <div className="w-60 bg-white h-full sticky top-0">
          <Sidebar />
        </div>
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header - only visible if logged in */}
        {isLoggedIn && <Header />}
        
        <div className="flex-1 overflow-auto p-4">
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

  // PrivateRoute component to handle protected routes
  const PrivateRoute = ({ children }) => {
    if (isLoading) {
      return <div className="flex justify-center items-center h-screen">Loading...</div>; // Optional: Add a spinner here
    }
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
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
            path="/Production_Overview"
            element={
              <PrivateRoute>
                <Production_Overview />
              </PrivateRoute>
            }
          />
          
          {/* Redirect any unknown routes to login or dashboard */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
