import ForgotPassword from "./Component/ForgotPassword";
import Login from "./Component/Login";
import ResetPassword from "./Component/ResetPassword";
import DashboardPage from "./Dashboard/DashboardPage";
import Header from "./Dashboard/Header";
import { BrowserRouter  , Routes, Route } from "react-router-dom"
import  ManageReport from "./Dashboard/ManageReport"
import ManageContact from "./Dashboard/ManageContact"
import ContactDetails from "./Dashboard/ContactDetails"
import AddContact from "./Dashboard/AddContact"



function App() {
  return (
   <div>
   {/* <DashboardPage/>
   <Login/>
   <ResetPassword/>
   <ForgotPassword/> */}
   <BrowserRouter>
   <Routes>
               <Route  path="/ManageReport" element={<ManageReport/>}/>
                <Route  path="/ManageContact" element={<ManageContact/>}/>
                <Route  path="/ManageContact/AddContact" element={<AddContact/>}/>
                <Route  path="/DashboardPage" element={<DashboardPage/>}/>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
                <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
                <Route  path="/ContactDetails" element={<ContactDetails/>}/>
                
           
                
               
                
        </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
