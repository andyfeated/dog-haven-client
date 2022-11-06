import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home/Home';
import ProtectedRoute from './components/Common/ProtectedRoute';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#FFAE12',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userJSON = localStorage.getItem('dogHavenUser');
    const parsedUser = JSON.parse(userJSON);

    setUser(parsedUser);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Login user={user}  setUser={setUser} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route 
          path='/home' 
          element={
            <ProtectedRoute user={user}>
              <Home setUser={setUser} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
