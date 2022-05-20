import React,{useState} from 'react'
import  logo from '../image/Group 19.png'
import  banner from '../image/Group 1925.png'
import '../Component/login.css'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const navigate = useNavigate();
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [valuePas, onSetValuePa] = useState();
    const [emailValid, setEmailValid] = useState();

    const checking = (e) =>{

      e.preventDefault();
      
     setEmailValid ( regEmail.test(valuePas) &&  valuePas  ? '' : 'Please enter your email address ' ) 
      
     
     
     console.log({emailValid});

  }

return (
  <div className='main-login row '>
      <div className='col-6 mob'>
          <img src={banner}/>
      </div>
      <div className='col-6 login_input '>
     <div className='login_inner'>
     <div className='login_logo'>
     <img src={logo}/>
     </div>
     <h6 className='login_header'>ForgotPassword</h6>
     <form onSubmit={checking} >
         <div className='email_item'>
             <div className='email_icon'></div>
             <ladle>Email Id</ladle>
             <input type='text' onChange={(e) => onSetValuePa(e.target.value)}/>
             <div className='error' >{ emailValid }</div>
         </div>
         <div className='btnSubmit'>
             <input type='submit' value='SUBMIT'onClick={() => {navigate('/ResetPassword');}}/>
         </div>
         <p className='back_login' onClick={() => {navigate('/');}}>
         Back to login
         </p>
     </form>
     </div>
      </div>

   
  </div>
)
}

export default ForgotPassword
