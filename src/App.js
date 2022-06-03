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
import UpdateContact from "./Dashboard/UpdateContact";
import Lists from "./Dashboard/List";

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
                <Route  path="/ManageContact/UpdateContact" element={ <UpdateContact/>}/>
                <Route exact path="/list" element={ <Lists/> }/>
               
                
           
                
               
                
        </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
