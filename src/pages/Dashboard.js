import React from 'react';
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Content from '../component/Content';
import Modals from '../component/Modals';

const Dashboard = () => {
return (
  <div>
    <Header />
    <Navbar />
    <Content />
    <Modals />
    </div>
);
};

export default Dashboard;