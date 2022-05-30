import React, { useState , useEffect} from 'react'
import  axios  from 'axios'
import Header from './Header';
import SideMenu from './SideMenu'
import { useNavigate } from 'react-router-dom'
import  edit from '../image/Frame 5.png'
import  icon from '../image/iconfinder_edit_editor_pen_pencil_write_392507 3.png'
import remove from '../image/trash.png'

function ManageContact() {
  const navigate=useNavigate();
 
 const [showSidebar, setShowSidebar] = useState(true);
 const [post , setpost] = useState([])

    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
   
  useEffect(() => {
    const response=async()=>{
       await axios.get("http://localhost:8001/contactlist").then(response =>   {
        setpost(response.data)
      console.log(response.data)}); 
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
      <div className='col-12 bg_color'>
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
            {post.map((e) =>(
                <tr key={e.id} >
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.Company} </td>
              <td>{e.phnumber}</td>
              <td>{e.email}</td>
              <td> <span onClick={card }><img src={ icon}/></span><span onClick={edit}> <img src={ edit}/></span><span onClick={remove}><img src={ remove}/></span></td>
              </tr>
              ))  }
              
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
