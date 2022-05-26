import React, { useState , useEffect} from 'react'
import  axios  from 'axios'
import Header from './Header';
import SideMenu from './SideMenu'
import { useNavigate } from 'react-router-dom'

function ManageContact() {
  const navigate=useNavigate();
 const [item , setitem] = useState()
 const [showSidebar, setShowSidebar] = useState(true);

    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
  useEffect(() => {
    const response=async()=>{
       await axios.get("http://localhost:8001/posts").then(response =>   setitem(response.data)); 
    }
    response();
}, []);
  return (
    <>
    <Header onSidebar={onSidebar}/>
    <div className='side_inner'>
    {showSidebar? <SideMenu />:null}
   
     <div className='das_body'>
     <h1 className='das_header'>Contact Detail</h1>
      <div className='col-12'>
        <div className='con_list'>
          <h1>List of Contacts</h1>
          <div className='contact_btn'>
            <button>Sample Document Download</button>
            <button>Bulk Upload Contact</button>
            <button onClick={()=>{navigate("/ManageContact/AddContact")}}> Add Contact</button>
          </div>
        </div>
        <div className='list_filter'>
          <h4>Filter</h4>
          <div className='filter_input'> <input type='text' placeholder='Search by User Name...'></input>
          <input type='text' placeholder='Search by Job title'></input>
          <input type='number' placeholder='+1 651-319-4767'></input>
          <input type='email' placeholder='Search by Email Id'></input>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
              <th>#</th>
              <th>Name</th>
              <th>Jod Title</th>
              <th>Mobile Number</th>
              <th>Email Id</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {item.map((e) =>(
                <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td></td>
              <td></td>
              </tr>
              ))
                
              } */}
              
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default ManageContact
