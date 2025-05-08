import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { DataProvider } from './Datacontext';

import Sidebar from './components/Sidebar';
import Headerbar from './components/Headerbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Monitoring from './Pages/Monitoring';
import CycleTime from './Pages/CycleTime';
import ProductionOverview from './Pages/Overview';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Layout({ children }) {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-screen h-screen flex bg-gray-100 overflow-hidden">
      {user && (
        <div className="w-60 bg-white h-full shadow-md z-10">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {user && <Headerbar />}
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/monitoring" element={<PrivateRoute><Monitoring /></PrivateRoute>} />
        <Route path="/cycletime" element={<PrivateRoute><CycleTime /></PrivateRoute>} />
        <Route path="/production-overview" element={<PrivateRoute><ProductionOverview /></PrivateRoute>} />
        <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </Layout>
  );
};


export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <AppRoutes />
        </Router>
      </DataProvider>
    </AuthProvider>

  );
}