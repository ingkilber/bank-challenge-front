import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Content from '../component/Content';

function Rutas() {
  return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Content" element={<Content />} />

    </Routes>
  );
}

export default Rutas;
