import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Content from '../component/Content';
import Transfer from '../component/Transfer';
import Record from '../component/Record';

function Rutas() {
  return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Content" element={<Content />} />

        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Record" element={<Record />} />

    </Routes>
  );
}

export default Rutas;
