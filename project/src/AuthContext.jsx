import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    const savedUserId = localStorage.getItem('userId');

    if (token && savedUser && savedUserId) {
      setUser(JSON.parse(savedUser));
      setUserId(Number(savedUserId));
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      userId,
      loading,
      setUser,
      setUserId,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
