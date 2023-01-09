import React from 'react';
import WindowDimension from './WindowDimension.jsx';
import colorScheme from '../Styling.js';
import mainSvg from '../Images/bec_an_exp.svg';
import Ellipse from '../Images/Ellipse 2.svg';
import Edit from '../Images/EditPencil.svg';
import S1 from '../Images/Group 6.1.svg';
import S2 from '../Images/Group 7.svg';
import S3 from '../Images/Group 8.svg';
import imgOne from '../Images/AboutUs/copy-one.png';
import imgTwo from '../Images/AboutUs/history.png';
import imgThree from '../Images/AboutUs/success.png';
import imgFour from '../Images/AboutUs/dollar.png';
import imgFive from '../Images/AboutUs/stopwatch.png';
import imgSix from '../Images/AboutUs/collection-files.png';
import imgSeven from '../Images/AboutUs/Edit/edit.svg';
import imgEight from '../Images/AboutUs/Edit/edit-one.svg';
import imgNine from '../Images/AboutUs/Edit/scanning-two.svg';
import imgTen from '../Images/AboutUs/Edit/full-selection.svg';


const AboutUs = () => {
  const { height, width } = WindowDimension();


  return (
    <>
      <section id="become-expert" className="about-us">
      <div className="container" style={{marginTop:"6em"}}>
        <div className="row" >
          <div className="col-lg-6">
          <h2 style={{color:"#2F2E41",fontWeight:"700"}}> The World’s Best Writing Service</h2>
                    <p style={{color:"#363C41"}}>Essayondemand provides high-quality,Personalized writing services to students,
                      businesses, and organizations around the globe.</p>
                    <a
                href="#m"
                className="btn btn-outline-light btn-get-started scrollto"
                style={{marginRight:"-0.7em"}}        
              >
                Hire Writer
              </a>
              <img src={Ellipse} alt="" className="img-fluid"/>
              <img src={Edit} alt="" className="img-fluid" style={{marginLeft:"-2.8em"}} />
              <h3 className="mt-4" style={{fontSize:"19px"}}> 
                <b>Trusted by</b>   <b style={{ color: colorScheme.mainColor }}>1M+</b>&nbsp;
                   <b>happy customers</b> 
                </h3>

                <div className="row text-center gy-2">

                <div className="col-lg-3">
                <img className="img-fluid" src={S1} alt=""/>
                </div>

                <div className="col-lg-3">
                <img className="img-fluid" src={S2} alt="" />
                </div>

                <div className="col-lg-3">
                <img className="img-fluid" src={S3} alt="" />
                </div>

                </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={mainSvg} alt="" />
          </div>
        </div>

        <h3 className="text-center" style={{marginTop:"6em",fontWeight:"600",textTransform:"uppercase",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>
        Our Vission        
        </h3>
        <div className="d-flex justify-content-center mb-4" style={{marginTop:"3em"}}>
        
            <div className="col-lg-10">
                <div className={height<=850 && width<=500?"card me-2 ms-2":"card p-4"} style={{border:"2px solid #2AA5DECC",borderRadius:" 13px"}}>
                    <div className={height<=850 && width<=500?"card p-3":"card p-4"}  style={{border:"1px solid #C8D9EE", borderRadius:"12px",marginTop:"-3em",marginLeft:height<=870 && width<=500?"0":"-3em"}}>
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}>Essayondemand aims to create an online platform that connects freelance writers with buyers of different content needs. Over a decade we have been providing informative, well-researched articles to customers located around the
                        globe. Our team of qualified and professional writers are committed to deliver high-quality writing best suites your needs. Our services are widely recognized by
                        the businesses of all fields and sizes and both our customers and writers connect here to achieve incredible results.”</p>
                    </div>
                </div>
            </div>
        </div>

        <h3 className="text-center" style={{marginTop:"3em",fontWeight:"600",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>
        Benefits of Using Essayondemand
        </h3>
        <p className="text-center" style={{color:"#363C41", fontSize:"17px", fontWeight:"400"}}>
        From essays to CVs to novels and articles, we can help you with all your writing needs.
        </p>

        <div className="row">
          <div className="col-lg-4">
            <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgOne} alt="" className="img-fluid" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Free Plagiarism Report</p>
            </div>

            <p>
            Originality is the key at Essayondemand. Every writing project is processed through a strict anti-plagiarism policy ensuring that you always receive 100% original and unique content.
            </p>
          
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgTwo} alt="" className="img-fluid" style={{width:"2.5em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>We Never Sleep</p>
            </div>
            <p>
            Are you facing problems in completing your deadlines? Connect with us 24/7, around the clock.Our dedicated support team is always here to help you. 
            </p>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgThree} alt="" className="img-fluid" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Lucrative Discounts</p>
            </div>
          <p className="pb-4">
          The best deals, just for you.We have designed our discount policy which is profitable for both the new and returning customers.
          </p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgFour} alt="" className="img-fluid" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Affordable Prices</p>
            </div>
            <p  className="pb-4">
            Our content services will never hurt your pocket. We have competitive and affordable prices in the
          industry that is best suitable for both the writers and customers.
            </p>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgFive} alt="" className="img-fluid" style={{width:"2.5em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>We Deliver On Time</p>
            </div>
              <p className="pb-4">
              On-time delivery is one of the main objectives of infinite writers. We will handle the time-
                consuming and tedious tasks of your writing needs.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgSix} alt="" className="img-fluid" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Super Writers</p>
            </div>
          <p >
          We have hired well-educated and experienced writers who are well trained to meet your industry’s writing needs. At Essayondemand get all the required skills and techniques needed for writing your next great copy.
          </p>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-5" style={{fontSize:"32px", color:"#363C41", fontWeight:"500"}}>  We Offer the Best Writing Service </h3>
        <p  className="text-center mb-5" style={{color:"#363C41"}}>We can take on any complex writing project and get it done at the best quality that leaves a lasting impression.</p>

        <div className="card mx-auto col-12 p-2" style={{border:"2px solid #2AA5DECC", borderRadius:"10px"}}>
          <div className="row">
            
          <div className="col-lg-6" style={{marginTop:"-2em",marginLeft:"-2em"}}>
            <div className="card p-4" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgSeven} alt="" className="img-fluid ms-3" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Creative Writing</p>
            </div>

            <p>
            Are you struggling to find the perfect words for your story, book, ebook, or any other type of copy for advertisement purposes? Hire a creative writer with Essayondemand now and witness how much they love to write.
            </p>
          
            </div>
          </div>
          
          <div className="col-lg-6"  style={{marginTop:"-2em"}}>
          <div className="card p-3" style={{height:"12.1em",borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgEight} alt="" className="img-fluid ms-3" style={{width:"2.5em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Technical Writing</p>
            </div>
            <p>
            Wants to hire a technical copywriter to write lengthy manuals, reports, or any other technical copywriting related to the product you are working on? Essayondemand is the place to hire your next technical writer with the required knowledge in the relevant field of subject.
            </p>
            </div>
          </div>


          <div className="col-lg-6 mt-4" style={{marginTop:"-2em",marginLeft:"-2em"}}>
            <div className="card p-3" style={{height:"11.2em",borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgNine} alt="" className="img-fluid ms-3" style={{width:"3em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Essay Writing</p>
            </div>

            <p>
            Get the perfect essay done by a professional essay writer! We have you covered.We will complete all your work with zero plagiarism and right on time. With Essayondemand around, you will never have to worry about the quality of your essay.
            </p>
          
            </div>
          </div>
          
          <div className="col-lg-6 mt-4"  style={{marginTop:"-2em"}}>
          <div className="card p-3" style={{borderColor:"#2AA5DE",borderRadius:"20px",boxShadow:" 0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <div className="d-flex">
            <img src={imgTen} alt="" className="img-fluid ms-3" style={{width:"2.5em"}} />&nbsp;&nbsp;
            <p className="text-center"style={{color:"#0E101A", fontSize:"20px",marginTop:"0.5em", fontWeight:"600"}}>Editing & Proofreading</p>
            </div>
            <p>
            Do you want to get yourblog post, article, essay, or noveledit or proofreadby a professional writer? Would you like someone to write a synopsis of a book? Essayondemand service is hereto help you with all your paraphrasing needs.
            </p>
            </div>
          </div>

          
          </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs