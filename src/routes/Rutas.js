import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';

function Rutas() {
  return (
      <Routes>
        {/* <Route exact path="/" component={Login}/> */}
        <Route index path="/" element={<Login />} />
    </Routes>
  );
}

export default Rutas;
