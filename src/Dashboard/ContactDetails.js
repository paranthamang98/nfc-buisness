import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import SideMenu from './SideMenu'
import  axios  from 'axios'
import  nameicon from '../image/Group 2046.png'
import  jobicon from '../image/Group 2046 (1).png'
import  phicon from '../image/Group 2046 (2).png'
import  emailicon from '../image/Group 2046 (3).png'
import  oricon from '../image/Group 2046 (4).png'
import  webicon from '../image/Group 2046 (5).png'
import  fbicon from '../image/Group 2046 (6).png'
import  intaicon from '../image/Group 2046 (7).png'
import  inicon from '../image/Group 2046 (8).png'
import  customicon from '../image/Group 2046 (9).png'
import  addicon from '../image/Group 2072.png'



function ContactDetails() {
  const navigate=useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [post ,setpost] =useState([])

    const onSidebar = (e) => {
        setShowSidebar(!showSidebar);
    };
    const func = (e) => {
      e.preventDefault(); 
      navigate("/ManageContact/AddContact")

    }
    const show = sessionStorage.getItem("cardId");
   
    useEffect(() => {
      const response=async()=>{
         await axios.get(`http://localhost:8001/contactlist/${show}`).then(response =>   {
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
    <div className='contact_info'>
      <h1>
      Contact Information
      </h1>
      <div>
        <button onClick={func}>Back</button>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
        <div className='inner_side'>
        <div><img src={nameicon}/></div>
        <p>Name</p>
        <h4>{post.name}</h4>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={jobicon}/></div>
        <p>Job Title</p>
        <h4>{post.Company}</h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div> <img src={phicon}/></div>
        <p>Mobile Number</p>
        <h4>{post.phnumber}</h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={emailicon}/></div>
        <p>Email id</p>
        <h4>{post.email}</h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={oricon}/></div>
        <p>Organization</p>
        <h4>{post.org}</h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={webicon}/></div>
        <p>Website</p>
        <h4><a href='#'>{post.site}</a></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={fbicon}/></div>
        <p>Facebook</p>
        <h4><a href='#'>{post.fbId}</a></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={intaicon}/></div>
        <p>Intagram</p>
        <h4><a href='#'>{post.InstaId}</a></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={inicon}/></div>
        <p>Linkedin</p>
        <h4><a href='#'>{post.inId}</a></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={customicon}/></div>
        <p>Custom Fields</p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div className='inner_side'>
          <div ><img src={addicon}/></div>
        <p>Address</p>
        <h4></h4>
       </div>
      </div>
      
      

</div>
    </div>
    </div>
    </>
  )
}

export default ContactDetails
