import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootPage from './pages/RootPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
