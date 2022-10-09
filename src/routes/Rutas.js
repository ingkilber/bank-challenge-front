import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Content from '../component/Content';
import Accounts from '../component/Accounts';
import Transfer from '../component/Transfer';

function Rutas() {
  return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Content" element={<Content />} />

        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Transfer" element={<Transfer />} />

    </Routes>
  );
}

export default Rutas;
