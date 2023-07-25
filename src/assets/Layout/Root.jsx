import React from 'react';
import Home from '../components/Home/Home/Home';
import Header from '../components/Home/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;