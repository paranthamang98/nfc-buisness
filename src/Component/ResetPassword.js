import React,{useState,useEffect} from 'react'
import  logo from '../image/Group 19.png'
import  banner from '../image/Group 1925.png'
import  axios  from 'axios'
import '../Component/login.css'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
    const navigate = useNavigate();
  const [showtype, setShowtype] = useState(true);
  const [password, setPass] = useState();
  const [confirm, setConfirm] = useState();
  const [getpassword, setGetPass] = useState();
  const [getconfirm, setGetConfirm] = useState();
  const [post, setpost] = useState();
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
    const changingType = () =>{
        setShowtype(!showtype);
    }
    const store = sessionStorage.getItem("regemail")
    useEffect(() => {
        const response=async()=>{
           await axios.get(`http://localhost:8001/posts/${ store} `).then(response =>   {
            setpost(response.data)
          console.log(response.data)}); 
        }   
        response();
    }, []);
    console.log(post);
    const checking = (e) =>{

        e.preventDefault();
        
        setGetPass ( strongRegex.test(password) &&  (password == confirm )  ? "" : "Please enter your password") ;
        console.log(getpassword);

        setGetConfirm( strongRegex.test(confirm) && (password == confirm ) ? "''" : "Please enter your passwords" );
        console.log(getconfirm);

        const response=async()=>{
            await axios.put(`http://localhost:8001/posts/${ store} `,{email:post.email,password:password,name:post.name}).then(response =>   {
             setpost(response.data)
           console.log(response.data)}); 
         }   
         response();

        (navigate('/')) 

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
       <h6 className='login_header'>Forgot Password</h6>
       <form onSubmit={checking}>
           <div className='password_item'>
               <div className='password_icon'></div>
               <ladle>Password</ladle>
               <input type={showtype? 'password':'text'} onChange={(e) => setPass(e.target.value)}/>
               <div onClick={changingType} className='i_icon'></div>
               <div className='error' >{getpassword}</div>
              
               
           </div>
           <div className='password_item'>
               <div className='password_icon'></div>
               <ladle>Confirm Password</ladle>
               <input type={showtype? 'password':'text'} onChange={(e) => setConfirm(e.target.value)}/>
               <div onClick={changingType} className='i_icon'></div>
               <div className='error' >{ getconfirm }</div>
             
           </div>
           
           <div className='btnSubmit'>
               <input type='submit' value='SUBMIT'/>
           </div>
       </form>
       </div>
        </div>

     
    </div>
  )
}

export default ResetPassword
