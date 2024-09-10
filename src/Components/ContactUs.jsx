import React from 'react';
import undraw from '../Images/undraw_social.svg';
import Ellipse from '../Images/Ellipse 2.svg';
import doubleTick from '../Images/doubleTick.svg';
import colorScheme from '../Styling.js';
import Mail from '../Images/Mail.svg';
import Home from '../Images/Home.svg'
import WorldMap from '../Images/worldMap.svg';
const ContactUs = () => {
  return (
    <>
    <section id="doctors" className="doctors" style={{background:"radial-gradient(29.56% 74.54% at 50% 50%, rgba(115, 103, 240, 0.1) 0%, rgba(115, 103, 240, 0.02) 100%)"}}>
    <div className="container">
    <div className="section-title mt-4 mb-5">
        <h2 style={{fontSize:"44px",fontWeight:"700",color:"#2F2E41"}}> Lorem ipsum dolor sit</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. </p>
        </div>
        <div className="row ms-3">
            <div className="col-lg-6">
            <img src={undraw} className="img-fluid"alt="" width="400px"/>
            </div>
            <div className="col-lg-6 gy-5">
                <div className="card" style={{width:"21em", height:"25.5em", borderRadius:"13px",background:"transparent", borderWidth:"3px",borderColor:"rgba(115, 103, 240, 1)"}}>
                <div className="card" style={{width:"20em",marginTop:"-2.7em",marginLeft:"-1em",borderRadius:"12px", boxShadow:" 1px 1px 16px #C7D9ED"}}>
                    <div className="card-body">
                <form>
                <div className="mt-4">
                <div className="mb-3">
                    <input type="text" className="form-control"  placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" id="exampleInputPassword1" required/>
                </div>
                    <div className="mb-3">
                    <textarea className="form-control" placeholder="Comments..."id="exampleFormControlTextarea1" rows={5} defaultValue={""} required/>
                    </div>

                <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-light mt-0  p-2 btn-do-my-paper"style={{width:"12em",backgroundColor:colorScheme.mainColor,color:colorScheme.white,marginRight:"-1.2em"}}>Submit</button>
                <img src={Ellipse} alt="" className="img-fluid do-my-paper" style={{width:"3.5em"}}/>
                <img src={doubleTick} alt="" className="img-fluid do-my-paper" style={{marginLeft:"-2.6em",width:"1.8em"}} />
                </div>
                </div>
            </form>

            </div>
                </div>
                </div>

            </div>
        </div>
        {/* end-row */}
        <div className="row ms-1" style={{marginTop:"8em"}}>
            <div className="col-lg-6 mb-4">
            <div className="card" style={{width:"22.5em",height:"11em", borderRadius:"13px",background:"transparent", borderWidth:"3px",borderColor:"rgba(115, 103, 240, 1)"}}>
                <div className="card" style={{width:"22em",borderRadius:"12px",marginTop:"-1.5em", marginLeft:"-0.6em",boxShadow:" 1px 1px 16px #C7D9ED"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="d-flex justify-content-center">
                                    <img src={Mail} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                     <div style={{fontSize:"17px",fontWeight:"500",color:"#0E101A"}}>Lorem ipsum</div>
                                     <div  style={{fontSize:"17px",fontWeight:"400",color:"#7367F0"}}>support@loremipsum.com</div>
                                     </div>  
                            </div>
                            <div className="d-flex justify-content-center gy-5">
                                    <img src={Home} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                     <div style={{fontSize:"17px",fontWeight:"500",color:"#0E101A"}}>Lorem ipsum dolor sit amet</div>
                                     <div  style={{fontSize:"17px",fontWeight:"400",color:"#0E101A"}}>Lorem ipsum dolor sit amet</div>
                                     </div>  
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={WorldMap} className="img-fluid" alt="" width="450px" />
            </div>
        </div>
        </div>
        </section>

    </>
  )
}

export default ContactUs