import React from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Index from './Components/DashBoard/Index'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import UserLayout from './Components/Layouts/UserLayout';
import { router } from './Routes/router';
import "./Components/DashBoard/style.css"
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
