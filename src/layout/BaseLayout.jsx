import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


const BaseLayout = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default BaseLayout
