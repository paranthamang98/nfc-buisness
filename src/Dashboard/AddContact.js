import React,{useState} from 'react'
import Header from './Header'
import SideMenu from './SideMenu'
import filedlogo from '../image/Field.png'
import  axios  from 'axios'


function AddContact() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [contactValue, setContactValue] =useState({
    name:'',
    email:'',
    Company:'',
    phnumber:'',
    org:"",
    site:"",
    fbId:"",
    InstaId:"",
    inId:"",
    secPhnumber:""

  })

    const onSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const changing = (e) =>{
      const { name , value } = e.target;
      setContactValue({ ...contactValue , [name]: value})

    }
    
    const checking =(e) => {
      e.preventDefault(); 
      
      const postData=async()=>{
        await axios.post(" http://localhost:8001/contactlist",contactValue).then(data=>console.log(data.data))
      }
      postData();
      
    }


    const validate = (values) => {
      const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
      const error = {};
      if (!values.email){
          error.email = 'Email is  required';
      }else if(!regEmail.test(values.email)){
          error.email ='this Email  is not valide email format';
      }if (!values.password){
          error.password = 'Emailis required';
      }else if(!strongRegex.test(values.password)){
          error.password ='this password is not valide password format';}
      return error;
  
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
       <form onSubmit={checking}>
       <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
          <div className='name_item'>
               <div className='name_icon'></div>
               <lable>Name</lable>
               <input
                type='text'
                name='name'
                placeholder='Thomas Jefferson'
                onChange={changing}
               value={contactValue.name}
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
                name='Company'
                placeholder='Enter Job Title'
                onChange={changing}
               value={contactValue.Company}
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
                name='phnumber'
                placeholder='Enter Phone Number'
                onChange={changing}
               value={contactValue.phnumber}
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
                name='email'
                placeholder='Enter Email id'
                onChange={changing}
               value={contactValue.email}
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
                name='org'
                placeholder='Enter Organization'
                onChange={changing}
               value={contactValue.org}
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
                name='site'
                placeholder='Enter Website'
                onChange={changing}
               value={contactValue.site}
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
                name='fbId'
                placeholder='Enter facebook link'
                onChange={changing}
               value={contactValue.fbId}
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
                name='InstaId'
                placeholder='Enter Instagram link'
                onChange={changing}
               value={contactValue.InstaId}
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
                name='inId'
                placeholder='Enter Linkedin link'
                onChange={changing}
               value={contactValue.inId}
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
                name='secPhnumber'
                placeholder='Enter Phone Number'
                onChange={changing}
               value={contactValue.secPhnumber}
               />
               <div className='error' ></div>
               <div className='close'></div>
           </div>
          </div>
          <div className='col-12 bg_color update_cancel '>
            <input type='submit' value='Update'/>
            {/* <input type='submit' value='Cancel'/> */}
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
