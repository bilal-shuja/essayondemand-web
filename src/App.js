import "./App.css";
import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Writers from './Components/WritersSection.jsx'
import Footer from "./Components/Footer.jsx";
import AllComp from "./Components/AllComp.jsx";
import AboutUs from './Components/AboutUs.jsx';
import BlogList from "./Components/BlogList.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import Faq from "./Components/Faq.jsx";
import ContactUs from './Components/ContactUs.jsx';
import TermsCondition from './Components/TermsConditions.jsx';
import Privacy from './Components/PrivacyPolicy.jsx';
import Refund from "./Components/RefundPolicy.jsx";
import OurGuarantees from './Components/OurGuarantees.jsx';
import BecomeExpert from './Components/BecomeExpert.jsx';

import AboutWriter from './Components/AboutWriter.jsx';

import { AsyncStorage } from 'AsyncStorage';

import baseURL from './Components/BaseURL';
import axios from 'axios';
 
function App() {
  const [getHomePage , setHomePage] = useState([])
  const SetLocalLogin= async (serviceName)=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
        HomePageContent(parsed,serviceName)
      }
    }catch{
        return null;
    }
  }

  const HomePageContent = ()=>{
    axios.get(`${baseURL}fetchHomepage`)
    .then((res)=>{
      setHomePage(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  const serviceName =(serviceName)=> {
    SetLocalLogin(serviceName)
  }


  useEffect(() => {
    SetLocalLogin()
    HomePageContent()
  }, [])
  


  return (
    <div>
      <Router>
        <Navbar serviceName={serviceName}/>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<AllComp data={getHomePage} />} />
          <Route
            path={`${process.env.PUBLIC_URL}/blogs`}
            element={<BlogList />}
          />
           <Route
            path={`${process.env.PUBLIC_URL}/Writers`}
            element={<Writers />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/blogDetails`}
            element={<BlogDetails />}
          />
          <Route path={`${process.env.PUBLIC_URL}/Faq`} element={<Faq />} />
          <Route path={`${process.env.PUBLIC_URL}/ContactUs`} element={<ContactUs />} />
          <Route path={`${process.env.PUBLIC_URL}/AboutUs`} element={<AboutUs />} />
          <Route path={`${process.env.PUBLIC_URL}/Terms`} element={<TermsCondition />} />
          <Route path={`${process.env.PUBLIC_URL}/Privacy`} element={<Privacy />} />
          <Route path={`${process.env.PUBLIC_URL}/Refund`} element={<Refund />} />
          <Route path={`${process.env.PUBLIC_URL}/OurGuarantees`} element={<OurGuarantees />} />
          <Route path={`${process.env.PUBLIC_URL}/BecomeExpert`} element={<BecomeExpert />} />
          <Route path={`${process.env.PUBLIC_URL}/AboutWriter`} element={<AboutWriter />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
