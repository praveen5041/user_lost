import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 //import ReactDOM from 'react-dom';
// import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Feed from './Components/Feed'
import Response from './Components/Response'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NotFound from './Components/NotFound'
import PrivateRoute from './Components/privateroute';
import Home from './Components/Home';
import ItemPage from './Components/ItemPage';
// import Feed from './Components/Feed'
import MyListings from './Components/MyListings'
import { ToastProvider } from 'react-toast-notifications';
window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;

function App()
{
  useEffect(()=>{
    
  },[])
  
  return (
    <>
    <Router>
    <Fragment>
      <Routes>
          
        <Route path='/' element={<Home/>} exact/>
        <Route path='/sign-up' element={<Signup/>} exact/>
        <Route path='/log-in' element={<Login/>} />
        <Route path='/feed' element={<Feed/>}/>
        {/* <PrivateRoute path='/feed' component={Feed}  /> */}
        {/* <PrivateRoute exact path='/feed' element={<Feed/>}  /> */}
        {/* <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
</Route> */}
        <Route path='/mylistings'  element={<MyListings/>} exact />
        <Route path='/responses'element={<Response/>} exact />
        {/* <ToastProvider autoDismiss={true} placement={"bottom-right"}> */}

          <Route path='/:item'  element={<ItemPage/>} exact />
        {/* </ToastProvider> */}
        {/* <Route path='*' component={NotFound}/> */}
         
        </Routes> 
        </Fragment>
        </Router>  
        
    {/* <Signup/> */}
    </>

  )
}

export default App