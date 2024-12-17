import {Outlet,Navigate,Route,Routes,useLocation} from "react-router-dom"
import './App.css'
import { Footer, Navbar } from './components'
import { About, Auth, Companies, CompanyProfile, FindJob, JobDetail, Upload, UserProfile } from "./pages";

function Layout (){
  const user=true;
  const location=useLocation();
 return user ? (<Outlet/>):(<Navigate to="user-auth" state={{from:location}} replace/>)
}

function App() {
  const user={};
  return (
    <main>
    <Navbar/>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Navigate to ='/find-jobs' replace={true}/>}/>
        <Route path="/find-jobs" element={<FindJob/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path={user?.user?.accountType==="seeker" ?"/user-profile":"/user-profile:id"} element={<UserProfile/>}/>
        <Route path={"/company-profile"} element={<CompanyProfile/>}/>
        <Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>  
        <Route path={"/upload-product"} element={<Upload/>}/>
        <Route path={"/product-detail/:id"} element={<JobDetail/>}/>
      </Route>
          <Route path="about-us" element={<About/>}/>
          <Route path="user-auth" element={<Auth/>}/>
    </Routes>
        {user && <Footer/>}
    </main>
    
  )
}

export default App
