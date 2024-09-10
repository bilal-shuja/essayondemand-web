import React from 'react';
import colorScheme from '../Styling.js';
import order2 from '../Images/order-2.svg';
import order1 from '../Images/order-1.svg';
import order3 from '../Images/order-3.svg';
import Ellipse from '../Images/Ellipse 2.svg';
import OnlineVideo from '../Images/OnlineVideo.svg';

const WritingServicesWork = ({data}) => {
  return (
    <>
     <section id="doctors" className="doctors"style={{background:"radial-gradient(37.04% 44.09% at 73.45% 49.19%, rgba(115, 103, 240, 0.17) 0%, rgba(251, 253, 255, 0.17)100%)"}} >
     <div className="container">
     <div className="section-title">
       {data.map((items)=>{
         return(

           <h2 className="text-center feedback-heading" style={{color:colorScheme.black}}>{items.prototitle}</h2>
         )
       })}
      </div>
    
   <div className="row">
   <div className="col-lg-12">
   
   <div className="row">
     <div className="col-lg-8">
  
     </div>
     <div className="col-lg-4">
   <div className="row">
     
    {
      data.map((items)=>{
        return(
          <>
            <div className="accordion-item p-2" style={{borderRadius:"15px"}}>
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <img src={order2} alt="" /> &nbsp;&nbsp;<div style={{fontSize:"17px", color:"#367fd3",fontWeight:"600"}}> {items.protitle_1} </div> 
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body ms-4 pt-2" style={{color:"#0e101a",fontSize:"16px",fontWeight: "400"}}>{items.protosub_1}.</div>
        </div>
      </div>
          </>
        )
      })
      
    
    }

    {
      data.map((items)=>{
        return(
          <>
            <div className="accordion-item p-2" style={{borderRadius:"15px",borderWidth:"1px"}}>
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <img src={order1} alt="" /> &nbsp;&nbsp;<div style={{fontSize:"17px", color:"#367fd3",fontWeight:"600"}}>{items.protitle_2} </div>
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body ms-4 pt-2" style={{color:"#0e101a",fontSize:"16px",fontWeight: "400"}}>{items.protosub_2}</div>
        </div>
      </div>
          </>
        )
      })
      
    } 

{
  data.map((items)=>{
    return(
      <>
       <div className="accordion-item p-2" style={{borderRadius:"15px",borderWidth:"1px"}}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <img src={order3} alt="" />&nbsp;&nbsp;<div style={{fontSize:"16px", color:"#367fd3",fontWeight:"600"}}> {items.protitle_3} </div> 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body ms-4 pt-2" style={{color:"#0e101a",fontSize:"16px",fontWeight: "400"}}>{items.protosub_3}</div>
    </div>
  </div>

      </>
    )
  })
}
  
 


{/* </div> */}
    </div>
   {/* end-row */}

 </div>
 {/* end-col */}
   </div>

   </div>
   {/* end-main-col */}
   </div>
   {/* end-main-row */}

     </div>
     <div className="text-center">
  <button className="btn btn-outline-light mt-0  p-2 btn-do-my-paper"style={{width:"12em",backgroundColor:colorScheme.mainColor,color:colorScheme.white,marginRight:"-1.2em"}}>Watch Videos</button>
<img src={Ellipse} alt="" className="img-fluid do-my-paper" style={{width:"3.5em"}}/>
  <img src={OnlineVideo} alt="" className="img-fluid do-my-paper" style={{marginLeft:"-2.6em",width:"1.8em"}} />
</div>
      </section>
    </>
  )
}

export default WritingServicesWork