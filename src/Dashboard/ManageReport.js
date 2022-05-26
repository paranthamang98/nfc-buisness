import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import SideMenu from './SideMenu'

function ManageReport() {
  const navigate=useNavigate();
 
 const [showSidebar, setShowSidebar] = useState(true);

    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
  return (
    <>
    <Header onSidebar={onSidebar}/>
    <div className='side_inner'>
    {showSidebar? <SideMenu />:null}
   
     <div className='das_body'>
   
      <div className='col-12'>
        <div className='con_list'>
          <h1>List of Reports</h1>
          <div className='contact_btn'>
           
            <button>Export As</button>
           
          </div>
        </div>
        <div className='list_filter'>
          <h4>Filter</h4>
          <div className='filter_input'> <input type='text' placeholder='Search by User Name...'></input>
          <input type='text' placeholder='Search By User Name...'></input>
          <input type='text' placeholder='Search by Geolocation'></input>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
              <th>Name</th>
              <th>Number of Saves</th>
              <th>Number of Overall Taps</th>
              <th>Geolocation</th>
            
              </tr>
            </thead>
            <tbody>
             
              
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default ManageReport
