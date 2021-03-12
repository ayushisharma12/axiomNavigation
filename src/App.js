import React from 'react';
import {BrowserRouter,Route}  from 'react-router-dom';
import Navbar from "./Component/Layout/Navbar";
import DashBoard from "./Component/DashBoard";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs"
import SignIn from  "./Component/Logins/SignIn"
import Register from "./Component/Logins/Register"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Route exact path="/" component={DashBoard}/>
     <Route  path="/AboutUs" component={AboutUs}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Register" component={Register}/>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
