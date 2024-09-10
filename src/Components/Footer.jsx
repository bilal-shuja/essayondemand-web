import React,{useState, useEffect} from 'react';
import MainLogo from '../Images/MainlogoTwo.svg';
import {Link} from 'react-router-dom';
import WindowDimension from './WindowDimension.jsx';
import VisaCard from '../Images/footer.svg';
import { AsyncStorage } from 'AsyncStorage';
import axios from 'axios';
import StaticToken from './StaticToken.js';

const Footer = () => {
  const { height, width } = WindowDimension();
  const [getBottomServices, setBottomServices] = useState([])
  const[getBottomOffers, setBottomOffers] = useState([])

  const SetLocalLogin= async ()=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
         gettingBottomServices(parsed)
        gettingBottomOffers(parsed)
      }
    }catch{
        return null;
    }
  }
  const gettingBottomServices = (token)=>{
    axios.get(`http://easyeassy.develpify.com/bottomservices/getbottomservices`,{
      headers:{
        Authorization:StaticToken
      }
    })
    .then((res)=>{
      setBottomServices(res.data.data)

    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const gettingBottomOffers = (token)=>{
    axios.get(`http://easyeassy.develpify.com/offers/getbottomoffers`,{
      headers:{
        Authorization:StaticToken
      }
    })
    .then((res)=>{
      setBottomOffers(res.data.data)

    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    SetLocalLogin();
    }, [])
    

  return (
    <>
     {/* Footer */}
  <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#2e394e'}}>
    {/* Grid container */}
    <div className="pb-0">
      {/* Section: Links */}
      <section className="section-one">
        {/*Grid row*/}
        <div className="row">
          
          {/* Grid column */}
          <div className="col-md-5 col-lg-5 col-xl-5 col-sm-3">
            <h6 className=" mb-4 font-weight-bold d-flex justify-content-center">
            <img src={MainLogo} alt="footer-logo" className="img-fluid" style={{marginLeft:height<=900 && width<=500?"1.2em":"-2em",width:"11em"}} />
            </h6>
      {/* start-accordian */}

      <div className="col-5 mx-auto">
   
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{background:"#4d596e"}}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={{background:"#4d596e"}} >
              Global 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="" >
                <ul className="" aria-labelledby="dropdownMenuButton2" style={{listStyle:"none"}}>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#" >Canada</a></li>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#">United Kingdom</a></li>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#">UAE</a></li>
                  </ul>

            </div>
          </div>
        </div>
        </div>
      {/* end-accordian */}
     
      </div>
      
      
          </div>
          {/* Grid column */}


          <hr className="w-100 clearfix d-md-none" />


          {/* Grid column */}
          <div className="col-md-7 col-lg-7">
      <div className="row mt-2">

        <div className="col-lg-3">
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle p-3 pe-2"  type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"  aria-expanded="false">
              Other Services:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <ul className="dropdown-menu dropdown-menu-light dp-menu-footer" aria-labelledby="dropdownMenuButton2" >
              {/* <li> 
                <a className="dropdown-item  footer-drop-link" href="">Action</a>
              </li> */}

                {
                  getBottomServices.map((items)=>{
                    return(
                      <li>
                        <Link className="dropdown-item  footer-drop-link" to={`/${items.name}`}>{items.name}</Link>
                        
                      </li>
                    )
                  })
                } 
     
            </ul>
          </div>
          </div>
          &nbsp;
          <div className="col-lg-3">
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle p-3 pe-2"  type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown"  aria-expanded="false">
              Best Offers:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <ul className="dropdown-menu dropdown-menu-light dp-menu-footer" aria-labelledby="dropdownMenuButton3">
            {
                  getBottomOffers.map((items)=>{
                    return(
                      <li>
                        <Link className="dropdown-item  footer-drop-link" to={`/${items.name}`}>{items.name}</Link>
                        
                      </li>
                    )
                  })
                }
             
            </ul>
          </div>
        </div>
        </div>

            <h6 className="footer-title mb-4 font-weight-bold mt-5">How Our Service is Used:</h6>
              <div className="footer-para">Our expert's notes are NOT intended to be forwarded as finalized projects, as it is only strictly meant to be used for research and study purposes. We do not endorse or condone any type of plagiarism.</div>
         </div>
          {/* Grid column */}



        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
      <div className="d-flex justify-content-center" >
      <hr />   
     </div>

          {/* Section: Links */}
      <section className="section-one">
        {/*Grid row*/}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
            <h6 className="text-uppercase mb-4  footer-headings">
              Legal
            </h6>
            <p>
              <Link to='/Terms' className="footer-text text-white">Terms & Conditions</Link>
            </p>
            <p>
              <Link to="/Refund" className="footer-text text-white">Refund Policy</Link>
            </p>
            <p>
              <Link  to="/Privacy" className="footer-text text-white">Privacy Policy</Link>
            </p>
            <p>
              <a className="footer-text text-white">Academic Integrity</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
           <h6 className="text-uppercase mb-4 footer-headings">Other</h6>
            <p>
              <a className="footer-text text-white">Essay Topic Generator</a>
            </p>
            <p>
              <Link to="/OurGuarantees" className="footer-text text-white">Service Guarantees</Link>
            </p>
            <p>
              <a className="footer-text text-white">Academic Integrity</a>
            </p>
            <p>
              <a className="footer-text text-white">Authors</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
            <h6 className="text-uppercase mb-4  footer-headings">Info Pages</h6>
            <p>
              <Link to="/BecomeExpert" className="footer-text text-white">Become an Expert</Link>
            </p>
            <p>
              <Link to="/ContactUs" className="footer-text text-white">Contact Us</Link>
            </p>
            <p>
              <Link to="/Faq" className="footer-text text-white">FAQ</Link>
            </p>
            <p>
              <a className="footer-text text-white">Honor Code</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-2  mx-auto">
            <h5 className="mb-4  footer-headings">Subscribe</h5>
            <div className={height<=900 && width<=500?"d-flex ms-5":"d-flex"}>
              <div className={height<=900 && width<=500?"ms-5 col-5":"col-10"}>
            <input type="email" className="form-control p-2" placeholder="Your email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text text-end" style={{color:"orange"}}>No spam</div>
            </div>
            <div>
              <button className={height<=900 && width<=500?" ms-2 btn btn-outline-primary p-2":"ms-2 p-2 btn btn-outline-primary"}>Sent</button>
            </div>
          </div>

            <img src={VisaCard} className="mt-4" alt="" style={{width:"14em",marginLeft:""}}/>
          </div>
          {/* Grid column */}


          <div className={height<=900 && width<=500?"d-flex justify-content-center mt-5 ms-1":"d-flex justify-content-start mt-5 ms-4"}>
         {/* Grid column */}
          {/* <div className=""> */}
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1 me-3" role="button"><i className="fab fa-facebook-f" /></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1 me-3" role="button"><i className="fab fa-twitter" /></a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1 me-3" role="button"><i className="fab fa-google" /></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
          {/* </div> */}
          {/* Grid column */}

       
        </div>
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
      <div className="d-flex justify-content-center">
            <hr />   
     </div>
      {/* Section: Copyright */}
      
       {/* Copyright */}
            
       <div className="text-center"> 
              <div style={{fontSize:"14px"}}>  © 2022 Copyright&nbsp; <a className="footer-text text-white" href="@">essayondemand. All rights reserved.</a>  Devellux Inc, 1012 E Osceola PKWY SUITE 23, KISSIMMEE, FL, 34744</div> 
            </div>
            {/* Copyright */}
      {/* Section: Copyright */}
    </div>
    {/* Grid container */}
  </footer>
  {/* Footer */}
    
    </>
  )
}

export default Footer