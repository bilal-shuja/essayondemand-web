import React from "react";
import colorScheme from '../Styling.js';
import Fire from '../Images/flame.png';
import Ellipse from '../Images/Ellipse 2.svg';
import Edit from '../Images/EditPencil.svg';
import S1 from '../Images/Group 6.1.svg';
import S2 from '../Images/Group20.svg';
import S3 from '../Images/Group21.svg';
import WindowDimension from './WindowDimension';

const Header = ({data}) => {
  const { height, width } = WindowDimension();
  // const {getServiceName setServiceName] = useState(false);

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero mt-4" style={{background:colorScheme.figmaBackground}}>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 ">
              <h5 className="mt-4">
                {/**/}
                <b style={{ color:colorScheme.mainColor }}> WRITING SERVICE</b> AT YOUR CONVENIENCE
              </h5>
              {

                data.map((items)=>{
                  return(
                    <div key={items.id}>
                    <h1 style={{fontSize:"36px"}}>{items.title_1}</h1>
                  <h2 style={{fontSize:"19px"}}>{items.subtitle_1}</h2>
                  </div>
                  )
                })
                  
              }
            

              <a
                href="#m"
                className="btn btn-outline-light btn-get-started scrollto"
                style={{marginRight:"-1.2em"}}        
              >
                Wite My Paper
              </a>
              <img src={Ellipse} alt="" className="img-fluid"/>
              <img src={Edit} alt="" className="img-fluid" style={{marginLeft:"-2.8em"}} />

              <h3 className="mt-5">
                  Trusted by <b style={{ color: colorScheme.mainColor }}>1M+</b> happy
                  customers
                </h3>
                <div className="row text-center gy-2">

                  <div className="col-lg-3">
                  <img className="img-fluid" src={S1} alt=""/>
                  </div>

                  <div className="col-lg-3 mt-3">
                  <img className="img-fluid" src={S2} alt=""  />
                 </div>

                  <div className="col-lg-3">
                  <img className="img-fluid" src={S3} alt="" />
                  </div>

              </div>
            </div>
            

            {/* col-end */}


             {/* col-start  */}
            <div className="col-lg-4 col-md-6 col-sm-8  mt-5 pb-5">
            {/*  */}
              <div className="card" style={{width:"18rem",height:height <= 850 && width <=500?"26em":"22.5em", borderRadius: "12px", background:colorScheme.backgroundTrans,borderWidth:"2px",borderColor:"#7367F0"}}>
              <div className="card" style={{width:"18rem",height:height <= 850 && width <=500?"25.5em":"22.5em",marginLeft:"1em",marginTop:"-0.8em" , borderRadius: "12px",background:"rgba(115, 103, 240, 0.1)"}}>
              <div className="card"style={{width:"19em",height: height <= 850 && width <=500 ? "24.5em":"22em",borderRadius: "13px",marginLeft:"1.5em",marginTop:"-0.8em" ,boxShadow:"1px 1px 16px #C7D9ED"}}>
                
                <div className="card-body">
                  <h2 className="card-title">
                    <b>Calculate the price</b>
                  </h2>
                  <div className="text-center">

                    <div
                      className="btn-group d-flex"
                      role="group"
                      aria-label="Basic radio toggle button group"
                      style={{height:"2em"}}

                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        defaultChecked
                      />
                      <label
                        className="btn btn-outline-light btn-sm"
                        htmlFor="btnradio1"
                        style={{ fontWeight:"900",border:'2px solid rgba(42, 165, 222, 0.56)', color:'#7367F0B2'}}
                      >
                        Writing
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-light btn-sm"
                        htmlFor="btnradio2"
                        style={{fontWeight:"900", border:'2px solid rgba(42, 165, 222, 0.56)', color:'#7367F0B2'}}
                      >
                       Rewriting
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-light btn-sm"
                        htmlFor="btnradio3"
                        style={{fontWeight:"900", border:'2px solid rgba(42, 165, 222, 0.56)', color:'#7367F0B2'}}
                      >
                       Editing
                      </label>
                    </div>
                  </div>

                  <div className="mt-1" style={{fontSize:"2em"}}>
                    <select
                      className="form-select  bg-light"
                      aria-label="Default select example"
                    >
                      <option selected>Essay (any type)</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>

                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <select
                        className="form-select  bg-light"
                        aria-label="Default select example"
                      >
                        <option selected>College</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className={height <=850 && width<=500 ?"col-lg-6 gy-1":"col-lg-6"}>
                      <select
                        className="form-select bg-light"
                        aria-label="Default select example"
                      >
                        <option selected>2 Weeks</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                {/* end-row */}
                  <div className="mt-1">
                    <select
                      className="form-select bg-light"
                      style={{ fontSize: "17px" }}
                      aria-label="Default select example"
                    >
                      <option selected>1 page/ 275 words</option>
                      <option value={1}>1 page/ 275 words</option>
                      <option value={2}>1 page/ 275 words</option>
                      <option value={3}>1 page/ 275 words</option>
                    </select>
                  </div>

                  <div className="row mt-1">

                      
                        <div className="d-flex">
                    <div className="col-lg-6">
                      <div className="form-check form-check-inline">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Double spaces
                        </label>

                      </div>
                      </div>

                      

                      <div className="col-lg-6">
                        
                        <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Single spaces
                        </label>
                        </div>
                      </div>

                      </div>
                       {/*end-flex*/}

                  </div>
                  {/* end-row */}

                  <div className="text-end">
                  <p  style={{fontSize:"18px",color:"black"}}><b>$ 5.7</b>  <img src={Fire} alt="" style={{width:"1em",marginTop:"-5px"}} /></p>
                  </div>

                  <div className="d-grid col-8 mx-auto" style={{marginTop:height <= 850 && width <=500?"-1em":""}}>
                  <a href="#d" className="btn btn-outline-light btn-calculator"style={{ background: colorScheme.figmaBackgroundTwo, color:colorScheme.white}}>Write My Paper</a>
                  </div>

                </div>
              </div>
              </div>
              </div>
              {/* card-end */}
            </div>
            {/* col-end */}
          
          </div>
        </div>
        </div>
      </section>
      
      {/* End Hero */}
      <div className="d-flex justify-content-center">
      <hr />
      </div>

    </>
  );
};

export default Header;
