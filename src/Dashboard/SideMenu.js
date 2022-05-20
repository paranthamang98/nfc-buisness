import React from 'react'
import contacts from '../image/contacts 1.svg'
import dashboard from '../image/Dashboard.svg'
import newspaper from '../image/newspaper 1.svg'

function SideMenu() {
  return (
    <div className='sideMenu'>
        <ul className='menuItems'>
            <li><img src={dashboard}/> Dashboard</li>
            <li><img src={contacts}/> Manage Contact</li>
            <li><img src={newspaper}/> Reports</li>
        </ul>
        <p>Copyright © All rights reserved.</p>
    </div>
  )
}

export default SideMenu
