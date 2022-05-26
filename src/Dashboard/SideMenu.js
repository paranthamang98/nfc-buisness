import React from 'react'
import { useNavigate } from 'react-router-dom'
import contacts from '../image/contacts 1.svg'
import dashboard from '../image/Dashboard.svg'
import newspaper from '../image/newspaper 1.svg'

function SideMenu() {
  const navigate=useNavigate();
  return (
    <div className='sideMenu'>
        <ul className='menuItems'>
            <li onClick={()=>{navigate("/DashboardPage")}}><img src={dashboard}  /> Dashboard</li>
            <li onClick={()=>{navigate("/ManageContact")}}><img src={contacts}  /> Manage Contact</li>
            <li onClick={()=>{navigate("/ManageReport")}}><img src={newspaper}/> Reports</li>
        </ul>
        <p>Copyright © All rights reserved.</p>
    </div>
  )
}

export default SideMenu
