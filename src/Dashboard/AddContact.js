import React,{useState} from 'react'
import Header from './Header'
import SideMenu from './SideMenu'
import filedlogo from '../image/Field.png'


function AddContact() {
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
       <h1 className='das_header'>Contact Detail</h1>
      <div className='col-12 bg_color'>
        <div className='con_list'>
          <h1>List of Contacts</h1>
          <div className='add_contact_btn'>
            <button>Add Field</button>
          </div>
        </div>
        <div className='field'>
          <div className='logo_inner'>
          <img src={filedlogo}/>
          </div>
          <button>Change LOGO</button>
          <p>Remove Photo </p>

        </div>
        <h4 className='inform'>
        Basic Information
        </h4>
       <form>
       <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Name</lable>
               <input
                type='text'
                name='name'
                placeholder='Thomas Jefferson'
               />
               <div className='error' ></div>
           </div>
          </div>
          
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Job Title</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Job Title'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Mobile Number</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Phone Number'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Email id</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Email id'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Organization</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Organization'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Website</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Website'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Facebook</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter facebook link'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Instagram</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Instagram link'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Linkedin</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Linkedin link'
               />
               <div className='error' ></div>
           </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Secondary  Phone Number</lable>
               <input
                type='text'
                name='name'
                placeholder='Enter Phone Number'
               />
               <div className='error' ></div>
               <div className='close'></div>
           </div>
          </div>
          <div className='col-12 bg_color update_cancel '>
            <input type='submit' value='Update'/>
            <input type='submit' value='Cancel'/>
          </div>
        </div>
       </form>
        </div>
    </div>
    </div>
    </>
   
  )
}

export default AddContact
