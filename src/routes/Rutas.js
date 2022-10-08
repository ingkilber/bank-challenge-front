import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Rutas() {
  return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default Rutas;
