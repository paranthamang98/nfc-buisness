import React from 'react'
import  logo from '../image/Group 19.png'
import  menu_img from '../image/menu 1.png'
import  notefication from '../image/miscellaneous 1.png'
import  imgProfile from '../image/Mask Group.png'
import  '../Dashboard/Dashboard.css'


function Header({onSidebar}) {
  const loginName = sessionStorage.getItem("name")
  return (
    <div className='header'>
        <div className='leftHeader'>
        <div className='logo'> <img src={logo}/></div>
        <div className='menu'><img src={menu_img} onClick={onSidebar}/>Dashboard</div>
        </div>
        <div className='rightHeader'>
        <div className='nIcon'> <img src={notefication}/></div>
        <div className='profile'>
            <div className='profile_img'>
                <img src={imgProfile}/>
            </div>
            <div className='profil_name'>
                <h6>{loginName}</h6>
                <p>Super Admin</p>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Header
