import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import SideMenu from './SideMenu'

function ContactDetails() {
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
    <div className='contact_info'>
      <h1>
      Contact Information
      </h1>
      <div>
        <button>Back</button>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
        <div className='inner_side'>
        <div></div>
        <p>Name</p>
        <h4>Thomas Jefferson</h4>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
        <h4></h4>
       </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 inner_section'>
       <div>
          <div className='inner_side'></div>
        <p></p>
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
