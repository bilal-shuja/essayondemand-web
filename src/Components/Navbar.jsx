import React,{useState, useEffect} from "react";
import MainLogo from "../Images/MainlogoTwo.svg";
import Logo from '../Images/eod.svg';
import WindowDimension from './WindowDimension';
import { Link } from "react-router-dom";
import { AsyncStorage } from 'AsyncStorage';
import axios from 'axios';



const Navbar = ({
  serviceName
}) => {
  const { height, width } = WindowDimension();
  const [getTopServices, setTopServices] = useState([])
  const[getTopOffers, setTopOffers] = useState([])


  const SetLocalLogin= async ()=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
        gettingTopServices(parsed)
        gettingTopOffers(parsed)
      }
    }catch{
        return null;
    }
  }

  const gettingTopServices = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}fetchTopservice`)
    .then((res)=>{
      setTopServices(res.data)

    })
    .catch((error)=>{
      return error;
    })
  }
  const gettingTopOffers = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}fetchTopoffer`)
    .then((res)=>{
      setTopOffers(res.data)

    })
    .catch((error)=>{
      return error;
    })
  }


  useEffect(() => {
  gettingTopServices();
  gettingTopOffers();
  }, [])
  


  return (
    <div>
      <div id="topbar" className="fixed-top">
        <h4 className="text-center">
          unique design-same expert service
        </h4>
      </div>
      {/* ======= Header ======= */}
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light"
        style={{ backgroundColor: "#fff", marginTop:"2em" }}
      >
        
        <div className="container-fluid d-flex">
          <Link
            className="navbar-brand d-flex"
            to={`${process.env.PUBLIC_URL}/`}
          >
            <img src={height <= 850 && width <=500?Logo:MainLogo} alt="" style={{ width:height <= 850 && width <=500?"2em": "7.5em" }} />
            {/* <p className="mt-4" style={{ fontSize: "18px", color: "#7367f0" }}>
              &nbsp;essayondemand
            </p> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link me-2"
                  aria-current="page"
                  to={`${process.env.PUBLIC_URL}/Writers`}
                >
                  Writers
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link  me-2" href="#">
                  How To Order
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle me-2"
                  href="#b"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{borderWidth:"1px", borderColor:"#7367F0"}}>
                  {
                    getTopServices.map((items)=>{
                      return(
                        <li>
                        <a onClick={() => serviceName(items.name) } className="dropdown-item"  style={{fontSize:"19px",cursor:"pointer"}}>
                          {items.name}
                        </a>
                      </li>
                      )
                    })
                    
                  }
                
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle me-2"
                  href="#a"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Offers
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{borderWidth:"1px", borderColor:"#7367F0"}}>
                  {
                      getTopOffers.map((items)=>{
                        return(
                          <li>
                          <a className="dropdown-item" onClick={()=> serviceName(items.name)} style={{fontSize:"19px", cursor:"pointer"}}>
                            {items.name}
                          </a>
                        </li>
                        )
                      })
                     
                  }
              
               
                </ul>
              </li>

              {/* <li className="nav-item">
            <Link className="nav-link me-2" to={`${process.env.PUBLIC_URL}/Faq`}>FAQ</Link>
          </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link me-2"
                  to={`${process.env.PUBLIC_URL}/AboutUs`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item " style={{ marginRight: "10em" }}>
                <Link
                  className="nav-link"
                  to={`${process.env.PUBLIC_URL}/blogs`}
                >
                  Blog
                </Link>
              </li>
            </ul>
            {/* */}
            <div className="nav-btns">
              <button className="btn me-2 btn-login">Log In</button>
              <button className="btn  btn-SignUp">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* End of .container */}
    </div>
  );
};

export default Navbar;
