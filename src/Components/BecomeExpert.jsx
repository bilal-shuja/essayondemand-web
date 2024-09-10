import React from 'react';
import Ellipse from '../Images/Ellipse 2.svg';
import Edit from '../Images/EditPencil.svg';
import becomeSvg from '../Images/bec_an_exp.svg';
import cardImgOne from '../Images/BecomeAnExpert/wallet-one.svg';
import cardImgTwo from '../Images/BecomeAnExpert/file-conversion.svg';
import cardImgThree from '../Images/BecomeAnExpert/people-speak.svg';
import cardImgFour from '../Images/BecomeAnExpert/reverse-lens-one.svg';
import RoundSvg from '../Images/BecomeAnExpert/Group 19.svg';
import MessageSvg from '../Images/BecomeAnExpert/message-sent.svg';
import WindowDimension from './WindowDimension.jsx';



const BecomeExpert = () => {
    const { height, width } = WindowDimension();

  return (
    <>
    <section id="become-expert" style={{background:"radial-gradient(29.56% 74.54% at 50% 50%, rgba(115, 103, 240, 0.1) 0%, rgba(115, 103, 240, 0.02) 100%)"}}>
        <div className="container" style={{marginTop:"8em"}}>
            <div className="row">
                <div className="col-lg-6">
                    <h2 style={{color:"#2F2E41",fontWeight:"700"}}> An endless writing opportunities with essayondemand – Write and explore new horizons.</h2>
                    <p style={{color:"#363C41"}}>Don't miss out on the opportunity and make money working for essayondemand by writing online. You'll work with professionals and get to enjoy an excellent website that's user-friendly</p>

                    <a
                href="#m"
                className="btn btn-outline-light btn-get-started scrollto"
                style={{marginRight:"-0.7em"}}        
              >
                Become an Expert
              </a>
              <img src={Ellipse} alt="" className="img-fluid"/>
              <img src={Edit} alt="" className="img-fluid" style={{marginLeft:"-2.8em"}} />
                </div>
                <div className="col-lg-6">
                        <img src={becomeSvg} className="img-fluid" alt="become-an-expert" />
                </div>
            </div>
            <h3 className="text-center mb-5" style={{fontFamily:"Montserrat",color:"#0E101A", marginTop:"5em" }}> <b>Benefits of Working with essayondemand</b> </h3>

            <div className="row">
                <div className="col-lg-6">
                <div className="card" style={{borderRadius:"20px",borderColor:"#2AA5DE",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
                    <img src={cardImgOne} alt="" className="mt-5 mb-2 mx-auto img-fluid" style={{width:"4em"}} />
                    <p className="text-center" style={{fontFamily:"Montserrat",fontSize:"22px",color:"#0E101A", fontWeight:"600"}}>Get Paid Fast</p>
                    <p className="pb-3 ps-4 pe-4 pt-1" style={{color:"#363C41",lineHeight:"25px"}}>
                    We send payments to your selected payment source on every 15th and the last day of each month. You can choose to receive a bank transfer or paypal as your payment source for receiving payments.
                    </p>
                </div>
                </div>
                <div className={height<=900 && width<=500?"col-lg-6 gy-3":"col-lg-6"}>
                <div className="card" style={{borderRadius:"20px",borderColor:"#2AA5DE",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
                    <img src={cardImgTwo} alt="" className="mt-5 mb-2 mx-auto img-fluid" style={{width:"4em"}} />
                    <p className="text-center" style={{fontFamily:"Montserrat",fontSize:"22px",color:"#0E101A", fontWeight:"600"}}>Work Anytime, Anywhere</p>
                    <p className="pb-3 ps-4 pe-4 pt-1" style={{color:"#363C41",lineHeight:"25px"}}>
                    You'll be your own boss! You choose how much work you like to do each day, week, or month. Most writers take around 3-4 orders in a week, but if you really want to be busy we can always offer more work.
                    </p>
                </div>
                </div>
            </div>

            
            <div className="row mt-3">
                <div className="col-lg-6">
                <div className="card" style={{borderRadius:"20px",borderColor:"#2AA5DE",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
                    <img src={cardImgThree} alt="" className="mt-5  mx-auto img-fluid" style={{width:"4em"}} />
                    <p className="text-center" style={{fontFamily:"Montserrat",fontSize:"22px",color:"#0E101A", fontWeight:"600"}}>Personal Assistant</p>
                    <p className="pb-3 ps-4 pe-4" style={{color:"#363C41",lineHeight:"23px"}}>
                    There’s always someone available to answer your questions, no matter what time of day you contact us. They can help you with any issue, even technical ones. All it takes is a quick chat with one of our customer service representatives.
                    </p>
                </div>
                </div>
                <div className={height<=900 && width<=500?"col-lg-6 gy-3":"col-lg-6"}>
                <div className="card" style={{borderRadius:"20px",borderColor:"#2AA5DE",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
                    <img src={cardImgFour} alt="" className="mt-5 mb-2 mx-auto img-fluid" style={{width:"4em"}} />
                    <p className="text-center" style={{fontFamily:"Montserrat",fontSize:"22px",color:"#0E101A", fontWeight:"600"}}>Your business at your fingertips</p>
                    <p className="pb-4 ps-4 pe-4 pt-1" style={{color:"#363C41",lineHeight:"25px"}}>
                    Our CRM system let you focus on your work without having to worry about any other details. You can view your orders, see the amount of ROI you've got, and chat with agents or managers anytime- even 24/7!
                    </p>
                </div>
                </div>
            </div>

            <div className="mt-5 text-center">
            <a
                href="#m"
                className="btn btn-outline-light btn-get-started scrollto"
                style={{marginRight:"-0.7em"}}        
              >
                Become an Expert
              </a>
              <img src={Ellipse} alt="" className="img-fluid"/>
              <img src={Edit} alt="" className="img-fluid" style={{marginLeft:"-2.8em"}} />
            </div>
        </div>

        <h3 className="text-center"style={{marginTop:"4em",color:"#2F2E41",fontWeight:"700"}} >Be a Part of our Writer’s Team in 5 Simple Steps </h3>
        <div className="d-flex justify-content-evenly">
            <div className="mt-3">
            <img className="img-fluid" src={RoundSvg} alt="" />
                <p className="text-center">Proof of Identity</p>                
            </div>

            <div className="mt-3">
            <img className="img-fluid" src={RoundSvg} alt="" />
                <p className="text-center text-dark">Verified Degree</p>                
            </div>
            <div className="mt-3">
            <img className="img-fluid" src={RoundSvg} alt="" />
                <p className="text-center text-dark">Sample Proof</p>                
            </div>
            <div className="mt-3">
            <img className="img-fluid" src={RoundSvg} alt="" />
                <p className="text-center text-dark">Writing Test</p>                
            </div>
            <div className="mt-3">
            <img className="img-fluid" src={RoundSvg} alt="" />
                <p className="text-center text-dark">Get Interviewed</p>                
            </div>

        </div>

        <div className="Proof-section ms-5" style={{marginTop:"7em"}}>
            <div className="card col-11 p-4"  style={{borderRadius:"20px",borderColor:"#2AA5DE",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)"}}>
            <p className="text-start" style={{marginLeft:"2.7em",fontWeight:"600",fontSize:"25px",color:"#0E101A"}}>Proof of Identity</p>
            <div className="d-flex ">
            <img src={MessageSvg} alt="" className="img-fluid" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="text-start" style={{color:"#363C41",marginBottom:"-1em"}}>
            To register, you'll need to upload some documents showing your identity. Don't forget to provide a payment method & make our platform a safer place. This information allows us to provide your payment and helps keep our platform safe for everyone. We will not share your information with anyone outside of our platform without your permission.
            </p>
            </div>
            </div>
            </div>
    </section>
    </>
  )
}

export default BecomeExpert