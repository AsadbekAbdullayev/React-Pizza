import React from 'react';
import Korzinka from '../page/korzinka';
import Home from '../page/home';
import Admin from '../page/admin';
import { Routes,Route,Navigate } from 'react-router';

const Root = () => {
  return <>
   <Routes>
  
    <Route  path='korzinka' element={<Korzinka/>}/>
    <Route  path='admin' element={<Admin/>}/>
    <Route  path='home' element={<Home/>}/>
    <Route path='/' element={<Navigate to={'/home'}/>} />
    <Route path='*' element={<h1>NOT FOUND</h1>} />

  </Routes>
  
  </>
};

export default Root;
