import React, { useState , useEffect} from 'react'
import  axios  from 'axios'
import Header from './Header';
import SideMenu from './SideMenu'
import { useNavigate } from 'react-router-dom'
import  editIcon from '../image/Frame 5.png'
import  icon from '../image/iconfinder_edit_editor_pen_pencil_write_392507 3.png'
import removeIcon from '../image/trash.png'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function ManageContact() {
  const navigate=useNavigate();
 
 const [showSidebar, setShowSidebar] = useState(true);
 const [post , setpost] = useState([])
 const [filtervalue , setfiltervalue] = useState({
  holder:"", 
  title:"",
  phnumber:"",
  email:"",
 })

 const getValu = (e) =>{
   setfiltervalue({...filtervalue,[e.target.name]:e.target.value})

 }
 console.log(filtervalue, "filtervalue");
    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
   
  useEffect(() => {
    const response=async()=>{
       await axios.get("http://localhost:8001/contactlist").then(response =>   {
        setpost(response.data)
    }); 
    }
    response();
}, []);
const  edit = (editId) => {
  const index = post.filter((e) =>{return e.id === editId;}).map((e) =>{ return e.id;});
  sessionStorage.setItem("editId", index);
  navigate("/ManageContact/UpdateContact");
};


const card= (editI) =>{
  const index = post.filter((e) =>{return e.id === editI;}).map((e) =>{ return e.id;});
  sessionStorage.setItem("cardId", index);

  navigate("/ContactDetails");

}
const remove =(edits) =>{
  const removeindex = post.filter((e) =>{return e.id === edits;}).map((e) =>{ return e.id;});
    const response = async () => {
      await axios.delete(`http://localhost:8001/contactlist/${removeindex} `);
  }
  response();
  window.location.reload(); 

 
  
}
 
  
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
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
            <button>Bulk Upload Contact</button>
            <button onClick={()=>{navigate("/ManageContact/AddContact")}}> Add Contact</button>
          </div>
        </div>
        <div className='list_filter'>
          <h4>Filter</h4>
          <div className='filter_input'> <input type='text' placeholder='Search by User Name...' name='holder'onChange={getValu}></input>
          <input type='text' placeholder='Search by Job title' name='title' onChange={getValu}></input>
          <input type='text' placeholder='+1 651-319-4767' name='phnumber' onChange={getValu}></input>
          <input type='text' placeholder='Search by Email Id' name='email' onChange={getValu}></input>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table' id="table-to-xls">
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
            {post.filter( (data) =>{
              if(
                filtervalue.holder === "" &&
                filtervalue.title === "" &&
                filtervalue.phnumber === "" &&
                filtervalue.email === "" 
              ){
                return data;
                
              }                
              else if (data.name
                .toLowerCase()
                .includes( filtervalue.holder.toLowerCase()) &&
                data.Company
                .toLowerCase()
                .includes( filtervalue.title.toLowerCase()) &&
                data.phnumber
                .toLowerCase()
                .includes( filtervalue.phnumber.toLowerCase()) &&
                data.email
                .toLowerCase()
                .includes( filtervalue.email.toLowerCase()) 
                )
                {
                  return data;
                }

            })
            .map((e) =>(
                <tr key={e.id} >
              <td>{e.id}</td>
              <td >< a onClick={()=>{edit(e.id)}} href='#'>{e.name}</a></td>
              <td>{e.Company} </td>
              <td>{e.phnumber}</td>
              <td>{e.email}</td>
              <td> <span  onClick={()=>{card(e.id)}}> <img src={ editIcon}/></span><span onClick={()=>{edit(e.id)}} ><img src={ icon}/></span><span onClick={()=>{remove(e.id)}}><img src={removeIcon}/></span></td>
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
