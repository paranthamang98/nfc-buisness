import React,{useState ,useEffect} from 'react'
import  logo from '../image/Group 19.png'
import  banner from '../image/Group 1925.png'
import '../Component/login.css'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios'


function ForgotPassword() {
  const navigate = useNavigate();
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [valuePas, onSetValuePa] = useState([]);
    const [emailValid, setEmailValid] = useState();
    const[post , setpost] =useState([])

console.log();
    useEffect(() => {
      const response=async()=>{
         await axios.get("http://localhost:8001/posts").then(response =>   setpost(response.data)); 
      }
      response();
  }, []);
    const checking = (e) =>{
      e.preventDefault();
     setEmailValid ( regEmail.test(valuePas) &&  valuePas  ? '' : 'Please enter your email address ' )
     const val = post.filter(e => {
      return (e.email == valuePas)
      
   })
   const getid = val.map((e)=> {return e.id})
   console.log(getid );
   if(val.length>0){
    navigate('/ResetPassword');
    sessionStorage.setItem("regemail" ,getid)
   
}
      
     
     
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
             <input type='submit' value='SUBMIT'/>
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
