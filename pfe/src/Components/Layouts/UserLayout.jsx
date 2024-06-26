import React from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const UserLayout = () => {
  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/front-awsome/6.4.0/css/all.min.css"></link>
      </head>
      <div id="root">
      <div class="sidebar">
          <SideBar/>
          </div>
          <body class="main--content">
            <div class="card--container">
            <Header />
            <Outlet />
          </div>
          </body>
        </div>
    </html>
  )
}

export default UserLayout
