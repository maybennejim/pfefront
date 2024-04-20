import React from 'react'

const Header = () => {
  return (
    <div className='main--content'>
      <div className="header--wrapper">
          <div className="header--title">
              <span>Primary</span>
              <h2>Dashboard</h2>
          </div>
          <div className="user--info">
              <div className="search--box">
                  <i className="fa-solid fa-search"></i>
                  <input type="text" placeholder="search" />
              </div>
          </div>
      </div>
      </div>
  ) 
}

export default Header
