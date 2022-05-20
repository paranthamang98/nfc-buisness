import React,{useState ,useEffect} from 'react'
import  logo from '../image/Group 19.png'
import  banner from '../image/Group 1925.png'
import '../Component/login.css'
import { BrowserRouter as Routes, Route, useNavigate } from "react-router-dom"
import { axios } from 'axios'



function Login() {
    // using i icon
    const [showtype, setShowtype] = useState(true); 
    // page navigate
    const navigate = useNavigate();
    // value getting procerr input section
    const [valuef , setValu] = useState({ email: "" ,  password: "" });
    const [errorv , setErrorv] = useState({});
    const [ Issubmite , setIsSubmite] = useState(false);

    const changing = (e) => {
        const { name , value } = e.target;
        setValu({ ...valuef , [name]: value})
    }
    // const [get , setget] = useState([]);
    // const localApi = "http://localhost:3000/posts";

    useEffect(() => {
        const response=async()=>{
            axios.get("http://localhost:3000/posts").then(res=>console.log(res)); 
        }
        response();
    }, []);

    const response= axios.get("http://localhost:3000/posts");
    console.log(response);


    
    // const [Value, onSetValue] = useState();
    // const [ValuePas, onSetValuePas] = useState();
    // const [emailValid, setEmailValid] = useState();
    // const [passValid , setPassValid] = useState();
    

    // const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");

    const changingType = () =>{
        setShowtype(!showtype);
    }
    const checking = (e) =>{
        e.preventDefault(); 
    //    setEmailValid ( regEmail.test(Value) &&  Value  ? '' : 'Please enter your email address ' ) 
    //    setPassValid (strongRegex.test(ValuePas) &&  ValuePas ? ''  :'Please enter your password' ) 
      setErrorv(validate(valuef));
      setIsSubmite(true);
      console.log(Issubmite);
    }
  
    useEffect(() =>{
        if(Object.keys(errorv).length === 0 && Issubmite){
            console.log(valuef);
        }
    },[errorv])
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
    // }else if(!values.password.length < 7){
    //     error.password ='password cannot exceed less than 7 characters';
    // }else if(!values.password.length > 13){y
    //     error.password='password cannot exceed less than 10 characters';
    // }
    return error;

    };
  
        
    
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
       <div>
           {Object.keys(errorv).length === 0 && Issubmite ?  (<div> sigen in successfully</div>) :(<pre>{JSON.stringify(valuef , undefined ,2)}</pre>)}
       </div>



       <h6 className='login_header'>Login</h6>
       <form onSubmit={checking}>
           <div className='email_item'>
               <div className='email_icon'></div>
               <ladle>Email Id</ladle>
               <input
                type='text'
                name='email'
                onChange={changing}
               value={valuef.email}/>
               <div className='error' >{errorv.email}</div>
              
               
           </div>
           <div className='password_item'>
               <div className='password_icon'></div>
               <ladle>Password</ladle>
               <input type={showtype? 'password':'text'}
                onChange={changing}
                name='password'
               value={valuef.password}/>
               <div onClick={changingType} className='i_icon'></div>
               <div className='error'>{errorv.password}</div>
             
           </div>
           <div className='last_forgot'>
               <p className='remember'><input type='checkbox'/>Remember me</p>
               <p className='forgot' onClick={() => {navigate('/ForgotPassword');}}>Forgot Password?</p>
           </div>
           <div className='btnSubmit'>
               <input type='submit' value='LOGIN'/>
           </div>
           {/* <span>{Issubmite}</span> */}
       </form>
       </div>
        </div>

     
    </div>
  )
}

export default Login;
