import React from 'react';
import colorScheme from '../Styling.js';
import file from '../Images/Report.svg';
import chat from '../Images/clock.svg';
import anonymus from '../Images/GlobalProtection.svg';
import keyboard from '../Images/Edit.svg';
import check from '../Images/check2.svg';
import Ellipse from '../Images/Ellipse 2.svg';
import Edit from '../Images/EditPencil.svg';
import Top from '../Images/Top.svg';
import WindowDimension from './WindowDimension';



const EssayWritingFeatures = ({data}) => {
  const { height, width } = WindowDimension();
  return (
    <>
    {/* ======= Departments Section ======= */}
<section id="departments" className="departments" style={{background:colorScheme.figmaBackgroundThree}}>
  <div className="container">
    <div className="section-title">
      {
        data.map((items)=>{
          return(

            <h2 style={{color:"#111"}}>{items.title_3}</h2>
          )
        })

      }
    </div>

    <div className="row">
    <div className="col-lg-6 mt-5">
    
    <div className="row">
    <div className="col-lg-12">
    <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img className="img-fluid ms-4" src={file} alt="" style={{width:"3em"}}/>
        <h3 className="d-flex align-items-center">Free Plagiarism Report</h3><img src={Top} alt="" />
    </div>
        <h6 className="mt-1 ms-4">
        Originality is the key at Essayondemand. Every writing project is processed through a strict anti-plagiarism policy ensuring that you always receive 100% original and unique content.
        </h6>
    </div>
    </div>
        {/*end-nested-row  */}

    <div className="row mt-5">
    <div className="col-lg-12">
    <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img className="img-fluid ms-4" src={chat} alt="" style={{width:"3em"}} />
        <h3>We never sleep</h3>
      </div>
        <h6 className="mt-2 ms-4">
        Are you facing problems in completing your deadlines? Connect with us 24/7, around the clock.Our dedicated support team is always here to help you. Click on hire my writer, and allow us to fulfill all your essay writing needs.  
        </h6>

    </div>
    </div>
            {/*end-nested-row  */}

    <div className="row mt-5">
    <div className="col-lg-12">
     <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img className="img-fluid ms-4" src={anonymus} alt="" style={{width:"3em"}} />
        <h3>Lucrative Discounts</h3>
    </div>
        <h6 className="mt-2 ms-4">
        The best deals, just for you.We have designed our discount policy which is profitable for both the new and returning customers.
        </h6>
    </div>
    </div>
            {/*end-nested-row  */}
<div className="row mt-5">
    <div className="col-lg-12">
   <div className="feature-right" style={{display:"flex",gap:"17px"}}>
     <img className="img-fluid ms-4" src={keyboard} alt="" style={{width:"3em"}} />
        <h3>Super Writers</h3>
    </div>
        <h6 className="mt-2 ms-4">
        We have hired well-educated and experienced writers who are well trained to meet your industry’s writing needs. At Essayondemand get all the required skills and techniques needed for writing your next great copy. 
        </h6>
    </div>
    </div>
            {/*end-nested-row  */}



</div>
{/* end-col-6 */}

    <div className={height<=850 && width<=500?"col-lg-6 col-md-4 col-sm-8 ms-3":"col-lg-6 col-md-4 col-sm-8"}>
    <div className={height<=850 && width<=500?"row":"justify-content-center"}>
   <div className="card essay-features-outer-card" style={{width:height<=850 && width<=500 ?"25rem":"29rem"}}>
    <div className="card essay-features-inner-card" style={{width: height<=850 && width<=500 ?"24rem":"28rem"}}>
    <h3 className="text-center mt-3 mb-2" style={{fontSize:"24px",fontWeight:"800",color:"#111"}}>Price Includes</h3>
   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Originality Report</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:height<=850 && width<=500?"27rem":"32rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around">
    
    <img src={check} alt="" className="img-fluid"  style={{width:"2rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>The Best Writer</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"12px"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:height<=850 && width<=500?"27rem":"32rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2rem",height:"2.5rem",marginLeft:"2px"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Formatting</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"3em"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:height<=850 && width<=500?"27rem":"32rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2rem",height:"2.5rem",marginLeft:"3px"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Unlimited Edits</h5>
       <h4 className="d-flex align-items-center mt-1 ms-3" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:height<=850 && width<=500?"27rem":"32rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid ms-1" style={{width:"2rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Outline</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"4.5rem"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:height<=850 && width<=500?"27rem":"32rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt=""className="img-fluid ms-2" style={{width:"2rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Title Page</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"3.5rem"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>

<div>
<p className="d-flex justify-content-center ms-2 mt-4" style={{fontSize:"20px", fontWeight:"700",color: "#0e101a"}}>Get all these features for  &nbsp; <span style={{color:"#92abc9",fontWeight:"400"}}><del>$65.77</del></span> &nbsp; <span style={{color:"#fd8c04",fontWeight:"700"}}>FREE</span></p>
</div>

<div className="pb-4">
<div className="text-center">
  <button className="btn btn-outline-light mt-0 w-50 p-2 btn-do-my-paper"style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white,marginRight:"-1.2em"}}>Do My Paper</button>
<img src={Ellipse} alt="" className="img-fluid do-my-paper" style={{width:"3.5em"}}/>
  <img src={Edit} alt="" className="img-fluid do-my-paper" style={{marginLeft:"-2.8em",marginTop:""}} />
</div>
</div>

  
    </div>
    {/* end-card */}  
    </div>
    {/* background-card */}

    </div>
    {/* end-nested-col */}
    </div>
    {/* end-nested-row */}

    {/* end-col */}
    
    </div>
    {/* end-main-row */}
  
  </div>
</section>
{/* End Departments Section */}


    
    </>
  )
}

export default EssayWritingFeatures