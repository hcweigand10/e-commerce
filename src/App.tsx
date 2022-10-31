import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useQuery } from 'react-query';

import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Landing from './pages/landing';
import Account from './pages/Account';
import Create from './pages/Create';
import Cart from './pages/Cart';
import './css/App.css';

const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/create-new" element={<Create/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/my-cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
