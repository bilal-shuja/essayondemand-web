import React,{ useState, useEffect } from 'react';
import WindowDimension from './WindowDimension';
import Slider from "react-slick";
import writer from '../Images/writer.jpg';
import Rating from '../Images/WritersRating.svg';
import CardLine from '../Images/CardLine.svg';
import CardLineTwo from '../Images/TeamCardLine.svg';
import TeamData from './TeamWriterFeedback.js';

const Team = () => {

    const { height, width } = WindowDimension();
    const settings = {
      arrows:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:height<=850 && width<=500? 1:1,
      slidesToScroll: 1,
      centerMode: true,
    };
    
  
  return (
    <>
     {/* ======= Services Section ======= */}
<section id="services" className="services">
  <div className="container">
    <div className="section-title">
      <h2 style={{color:"#000000",fontSize:"35px"}}>Team of Professional Essay Writers</h2>
      <p style={{color:"#000000",fontSize:"16px"}}>With our essay service, you'll find an essay writer for any task. Their rating is based on previous customer reviews and successful orders. Before you hire a writer, you can familiarize yourself with their track record in detail.</p>
    </div>
  
    <Slider {...settings}>
    {TeamData.map((items)=>{
      return(
        <div className="d-flex justify-content-center">
        <div className={height<=850 && width<=500?"col-12 mx-auto  row ":"row col-lg-9 "} style={{background:"radial-gradient(66.32% 187.49% at 33.68% 50%, rgba(115, 103, 240, 0.1) 0%, rgba(54, 127, 211, 0.035) 100%)",borderRadius:"20px",height:"75vh"}}>
        <div className={height<=850 && width<=500?"col-8 mx-auto":" col-lg-4"}>
        <div className="card" style={{borderRadius:"20px", height:"23em", borderColor:"rgb(200,217,238)",border:"1px solid #7367F0"}}>
          <div className="card-body">
                                    
                            <div className="d-flex">
                              <div className={height<=850 && width<=500?"me-2 col-lg-6":"col-lg-6"}>
                                <img className="img-fluid p-1" src={writer} alt="" style={{width:"5em",borderRadius:"4px",boxShadow:"0px 4px 4px #7367F0",border:"1px solid #7367F0"}} />
                                </div>
                                <div className="col-lg-6">
                                    <p className="mt-1"style={{fontSize:"16px",fontFamily:"Montserrat",fontWeight:"600",letterSpacing:"0.05em",color:"#0E101A"}}>Lorem Ipsum</p>
                                    <div className="d-flex" style={{marginTop:"-0.7em"}}>
                                    <p style={{fontSize:"18px",fontWeight:"600",color:"#7367F0"}}>5.0&nbsp;</p>
                                    <img className="img-fluid" src={Rating} alt="" style={{width:"5em",marginTop:"-1em"}} />
                                    </div>
                                    <p className="text-center"style={{color:"#A49BFF", marginTop:"-1.3em"}}>(1261 reviews)</p>
            
                                    </div>
                                    </div>
                                <img className="img-fluid" src={CardLine} alt="" />

                                <div className="d-flex justify-content-between mt-1">
                                        <p style={{fontSize:"16px",fontWeight:"500",color:"#A49BFF"}}>Degree:</p>
                                        <p className="align-items-center"style={{fontSize:"19px",fontWeight:"600",color:"#7367F0"}}>Bachelor’s</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                        <p style={{fontSize:"16px",fontWeight:"500",color:"#A49BFF"}}>Total orders:</p>
                                        <p className="me-5"style={{fontSize:"19px",fontWeight:"600",color:"#7367F0"}}>3458</p>
                                </div>
                                
                                <img className="img-fluid" style={{fontWeight:"700"}}src={CardLine} alt="" />

                                <p style={{color:"#A49BFF",fontSize:"14px",fontWeight:"400"}}>Competences:</p>
                                <p style={{width:"10em",background:" rgba(115, 103, 240, 0.1)",borderRadius:"3px", fontSize:"14px"}}>Lorem ipsum dolar</p>
                                <p style={{width:"10em",background:" rgba(115, 103, 240, 0.1)",borderRadius:"3px",fontSize:"14px"}}>Lorem ipsum dolar</p>


                            </div>
                        </div>
                      </div>
                {/* end-col */}
                <div className={height<=850 && width<=500?"ms-5 col-10":"col-lg-8"}>

                <h2 className="text-start pt-4" style={{fontSize:"21px",fontWeight:"600",color:"#0E101A"}}>Recent Review About this Writer</h2>
                <h3 className="ms-5" style={{fontSize:"17px", fontWeight:"500", color:"#7367F0"}}>User ID:<b> #327657</b>  </h3>

                <img src={CardLineTwo} alt=""style={{width:"30em"}} /><br/>
                <p style={{fontSize:"18px",color:"#0E101A"}}><b>Case Study</b></p>
                  <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis dolore asperiores itaque esse distinctio nesciunt error. 
                    Nesciunt deserunt, consequuntur, porro ipsam recusandae sunt alias 
                    molestiae repudiandae at accusamus, molestias perspiciatis.
                  </p> 
                <div className={height<=850 && width<=500?"d-flex gap-4 mt-3 mb-4":"d-flex gap-4 mt-3"}>
                    <button className="btn btn-outline-primary about-writer ms-3" style={{borderRadius:"3px", width:"117px",border:"1px solid #367FD3"}}> About Writer</button>
                    <button className="btn btn-light text-white hire-writer" style={{borderRadius:"3px", width:"111px",background:"linear-gradient(276.79deg, #7367F0 1.81%, rgba(42, 165, 222, 0.7) 94.81%)"}}>Hire Writer</button>
                                    
                </div>
                </div>
                {/* end-col */}
          
          
  
          </div>
        </div> 
      )

})}
</Slider>
    <div className="row mt-5">
    <div className="col-lg-12">
    <div className={height<=850 && width<=500?"d-grid col-6 mx-auto":"d-grid col-2 mx-auto"}>
    <button className="btn btn-outline-primary">View All Writers</button>
    </div>
    </div>
    </div>
    {/* end-row */}
  </div>
  {/* container */}
</section>
{/* End Services Section */}
  <div className="d-flex justify-content-center">
  <hr />
  </div>
    </>
  )
}

export default Team