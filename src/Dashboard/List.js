import React,{useState } from 'react'
import Header from './Header'
import SideMenu from './SideMenu'
import filedlogo from '../image/Field.png'
import  axios  from 'axios'
import { BrowserRouter as Routes, Route, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './popup'
import File from './file'


function List() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showbar, setShowbar] = useState(false);
  const [contactValue, setContactValue] =useState([{
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

  }])

  const onSidebar = () => {
    setShowSidebar(!showSidebar);
}; const onbar = () => {
  setShowbar(!showbar);
};
    const changing = (e) =>{
      const { name , value } = e.target;
      setContactValue({ ...contactValue , [name]: value})
      // console.log({...contactValue ,...inputFields});

    }
    
    const checking =(e) => {
      e.preventDefault(); 
      // console.log(contactValue, inputFields);
      // setContactValue( {...contactValue , ...inputFields} )

      if(!contactValue.name ==  "" &&  !contactValue.phnumber  == "" ) {
        const postData=async()=>{
          await axios.post("http://localhost:8001/contactlist",contactValue).then(data=>console.log(data.data))
        }
        postData();
        navigate('/ManageContact')
        toast("Swipe to close")
        console.log(contactValue);


      } else  {
        toast("please enter the name and number")
      }
      
      
      
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



      const [inputFields, setInputField] = useState([{firstName:''}]);
        const handleChangeInput = (index, event)=>{
         
           let data = [...inputFields];
            data[index] [event.target.name] = event.target.value;
            setInputField(data);
            console.log(data)
            console.log(inputFields)
        }
        const handleAddFields =() =>{
            setInputField([...inputFields, {firstName:''}])
        }
        const handleRemoveFields = (index) =>{
            const data = [...inputFields];
            data.splice(index, 1);
            setInputField(data);
        }
  return (
    <>
    {/* {showbar ? <Popup/> :null } */}
    
    <ToastContainer />
    <Header onSidebar={onSidebar}/>
    <div className='side_inner'>
    {showSidebar? <SideMenu />:null}
     <div className='das_body'>
       <h1 className='das_header'>Contact Detail</h1>
      <div className='col-12 bg_color'>
        <div className='con_list'>
          <h1>List of Contacts</h1>
          <div className='add_contact_btn'>
         
            <button onClick={() => handleAddFields()}>Add </button>
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
         
          
          
         
          

          {/* addddd */}
              {inputFields.map((input, index) =>(
                      <div key={index} className='col-lg-4 col-md-6 col-sm-12 inner_icon '>
                         <div className='name_item'>
                         <div className='name_icon'></div>
                         <lable>Secondary  Phone Number</lable>
                         <input value={input.firstName}  name='firstName'  onChange={event => handleChangeInput(index , event)} />
                          {/* <button onClick={() => handleAddFields()}>+</button> */}
                          <div className='close ' onClick={() => handleRemoveFields()}></div>
                        </div>
                      </div>
                  ))}
                  {/* adddd */}
          
          <div className='col-12 bg_color update_cancel '>
            <input type='submit' value='Update'/>
            <input onClick={()=>{ navigate('/ManageContact')}} type='button' value='Cancel'/>
          </div>
        </div>
       </form>
        </div>
    </div>
    </div>
    {/* <File/> */}
    </>
   
  )
}

export default List
