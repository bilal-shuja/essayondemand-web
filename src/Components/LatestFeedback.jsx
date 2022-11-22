import React from 'react';
import colorScheme from '../Styling.js';
import MainLogo from "../Images/MainlogoTwo.svg";
import sitejabber from '../Images/Sitejabber.svg';
import Reseller from '../Images/ResellerRatinglogo.svg';
import CustomData from './CustomerFeedback.js';
import Slider from "react-slick";
import WindowDimension from './WindowDimension';


const LatestFeedback = ({data}) => {
  const { height, width } = WindowDimension();

  const settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:height<=850 && width<=500? 1:3,
    slidesToScroll: 1,
    centerMode: true,
  };
  
  
 
  return (
    <>
    <section id="doctors" className="doctors">
  <div className="container">
    <div className="section-title">
      {
        data.map((items)=>{

          return(
            <>
            <h2 className="text-center feedback-heading" style={{color:colorScheme.black}}>{items.title_4}</h2>
            <p className="feedback-heading-para" style={{color:colorScheme.black}}>{items.subtitle_4}</p>
            </>
          )

        })
      }

    </div>
    <div className="row">
        <div className="col-lg-12">
    <div className="d-flex justify-content-center">
            <div className="card me-3" style={{borderRadius:"10px" ,borderColor:colorScheme.mainColor,cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-center">
            <div className=""style={{fontSize:"9px",color:colorScheme.mainColor,fontWeight:"600",marginTop:"6px"}}>Reviews</div>&nbsp;
            <img src={MainLogo} alt="" className="img-fluid" style={{width:"5em"}}/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}

        </div>
            <div className="card feedback-card-2 me-3" style={{borderRadius:"10px" ,cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-center">
            <div className=""style={{fontSize:"9px",color:"#92ABC9",marginTop:"6px"}}>Reviews</div>&nbsp;
            <img src={sitejabber} alt="" className="img-fluid"style={{width:"5em"}}/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}
        </div>
            
            <div className="card feedback-card-2" style={{borderRadius:"10px",cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-center">
            <div className=""style={{fontSize:"9px",color:"#92ABC9",marginTop:"6px"}}>Reviews </div>&nbsp;
            <img src={Reseller} alt="" className="img-fluid" style={{width:"6em"}}/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}
        </div>
            </div>
            {/* end-col */}
        </div>
        {/* end-flex-box */}
    </div>
    {/* end-row */}
    

<div className="row mt-4">
  <div className="col-lg-12 p-4">

        <Slider {...settings}>
          { CustomData.map((items)=>{
            return(
              <div className="col-md-4 mb-5 ">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"340px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:"#92abc9",fontFamily:"Roboto, sans-serif"}}> Customer ID:{items.CustomID}</div>
                    <div style={{width:height<=850 && width<=500?"15em":"20em"}}>
                    <hr />
                    </div>
                    <div className="d-flex justify-content-center">
                    <img src={items.Rating} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:colorScheme.lightGrey}}>
                   Writer: <span style={{color:colorScheme.mainColor,fontWeight:"700"}}>{items.Writer}</span>
                   </div>
 
                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:colorScheme.black}}>{items.ContentType}</div>
                    <div className="review-text" style={{fontSize:"16px",color:colorScheme.black}}>
                      {items.Comments}
                    </div>
                    <div className="review-date text-center"  style={{fontSize:"17px",color:colorScheme.lightGrey,lineHeight:"3.5em"}}>{items.Date}</div>
                </div>
              </div>
            </div>
              
            )
          })
           
          }
           
            {/* end-col */}

          {/* end-row */}        
        </Slider>
        {/* carousel-item */}

     
   


    </div>
    {/* end-main-col */}
    
    </div>
    {/* end-row */}

      {/* <div className="row">
     <div className="d-flex justify-content-evenly">
    <a className="btn btn-outline-light btn-left"href="#carouselOne" role="button" data-slide="prev" style={{fontSize:"26px" ,borderRadius:"25px",backgroundColor:colorScheme.mainColor}}>
      <i className="fa fa-arrow-left" style={{color:colorScheme.white}} />
    </a>
    <a className="btn btn-outline-light btn-right" href="#carouselOne" role="button" data-slide="next" style={{fontSize:"26px",borderRadius:"25px",backgroundColor:colorScheme.mainColor}}>
      <i className="fa fa-arrow-right" style={{color:colorScheme.white}} />
    </a>
   </div>
  
    </div> */}
    {/* end-row */}

    <div className="d-flex justify-content-center mt-5">
    <button className="btn btn-outline-light check-all-review-btn" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white,padding:"16px 18px",borderRadius:"6px",width:"200px"}}>Check All Reviews</button>
    </div>
<div style={{width:"90em" ,marginTop:"7em", color:colorScheme.lightGrey}}>
<hr />
</div>
  </div>
</section>
    </>
  )
}

export default LatestFeedback