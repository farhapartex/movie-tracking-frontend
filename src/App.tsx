import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootPage } from './pages/RootPage';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import './App.css';

function App() {
  const user = localStorage.getItem('_mv_user');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace={true} /> : <Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={user ? <RootPage /> : <Navigate to="/login" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
