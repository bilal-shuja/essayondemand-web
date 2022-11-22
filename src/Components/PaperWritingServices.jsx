import React,{useState} from 'react';
import check from '../Images/Ellipse 3.svg';
import colorScheme from '../Styling.js';
import Feather from '../Images/feather.svg';
import WindowDimension from './WindowDimension';



const PaperWritingServices = ({data}) => {

  const { height, width } = WindowDimension();
  const [indexOne, setIndexOne] = useState(1);

const returnList = ()=>{
if(indexOne === 1){
  return(
  <>
    <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Essay</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Case Study</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Report</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Research Paper</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Presentation or Speech</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Annotated Bibliography</p>
        <p style={{color:colorScheme.black}}><img src={check} className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Article Review</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Literature Review</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Business Plan</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Research Proposal</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Book / Movie Review</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Editing and proofreading</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Reflective Writing</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Thesis / Dissertation</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Admission Essay</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Creative Writing</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Critical Thinking / Review</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Book Reviews</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Term Paper</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Other</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
  </>
  )
}
else if(indexOne === 2){
  return(<>
  <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Homework Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Statistics Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Physics Assignment</p>
       
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Engineering Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Biology Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Chemistry Assignment</p>
       
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Math Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Geography Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Other</p>
        
        </div>
      </div>
       
       </div>
      {/* end-col */}
  
  </>)
}
else if(indexOne === 3){
  return(<>
  <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Multiple Choice Questions</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Short Answer Questions</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start justify-content-center mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check}  className="img-fluid"alt="" style={{width:"0.7em"}}/>&nbsp;Word Problems</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
  
  </>)

}

}


  return (
    <>
    <section id="doctors" className="doctors">
      <div className="section-title">
        {
          data.map((items)=>{
            return(
              <>
                    <h2 className="text-center feedback-heading" style={{color:colorScheme.black}}>{items.title_5}</h2>
      <p className="text-center feedback-heading-para" style={{color:colorScheme.black}}>{items.subtitle_5}</p>
              </>
            )
          })
        }

      </div>
    <div className="container mt-4" style={{background:'radial-gradient(66.32% 187.49% at 33.68% 50%, rgba(115, 103, 240, 0.1) 0%, rgba(54, 127, 211, 0.035) 100%)', borderRadius:"30px"}}>
    <div className="section-title">
   
    
      <div className="row">
      <div className="col-lg-12">
      
      <div className="row">
        <div className={height<=850 && width<=500?"col-lg-4 col-12 ms-4":"col-lg-4 col-12"}>
        <div className="card paper-writing-card" style={{width:"20em",backgroundColor:colorScheme.white,borderRadius:"25px",marginTop:"-2em"}}>
        <div className="card-body">
        <div className="img-fluid">
        <img src={Feather} alt="" style={{width:"5em"}}/>
        </div>

        <div className="d-grid gap-2 mx-auto pt-4 pb-3">
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(1)}} style={{background:colorScheme.figmaBackgroundTwo,color:colorScheme.white}}>Paper Work</button>
   
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(2)}} style={{background:colorScheme.figmaBackgroundTwo,color:colorScheme.white}}>Coursework/Homework</button>
     
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(3)}} style={{background:colorScheme.figmaBackgroundTwo,color:colorScheme.white}}>other Assignments</button>
        </div>

        </div>
        </div>

        </div>{/* end-inner-col */}

        <div className="col-lg-8 mt-3">
      <div className="row">

        {returnList()}

       </div> {/* end-anonymus-row inside of column */}

        </div> {/* end-inner-col */}
        
      </div> {/* end-inner-row */}


      </div>
      {/* end-main-col */}
      </div>
      {/* end-main-row */}


         
    </div>

    </div>
         <div className="d-grid col-lg-2 col-sm-6  mx-auto mt-5 col-6">
            <a href="#e" className="btn btn-outline-light paper-writing-card p-3 writer-button" type="button" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white}}>Find Your Writer</a>
        </div>
    </section>
    </>
  )
}

export default PaperWritingServices