import React,{useState,useEffect} from 'react';
import colorScheme from '../Styling.js';
import ImageOne from '../Images/plagiarismFree.svg';
import ImageTwo from '../Images/BestPaperWriter.svg';
import ImageThree from '../Images/WhatDoIGet.svg';
import ImageFour from '../Images/UserFriendlyService.svg';
import WindowDimension from './WindowDimension';
import { AsyncStorage } from 'AsyncStorage';
import{Container, Row, Col} from 'react-grid-system';
import axios from 'axios';
import baseURL from './BaseURL.js';



const EssayWritingExp = () => {
  const { height, width } = WindowDimension();
  const[getPageFaqs, setPageFaqs] = useState([])

  const SetLocalLogin= async ()=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
        gettingPageFaqs(parsed)
      }
    }catch{
        return null;
    }
  }

  const gettingPageFaqs = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}fetchPagefaq`)
    .then((res)=>{
      setPageFaqs(res.data)
    })
    .catch((error)=>{
      return error;
    })
  }
  useEffect(() => {
    gettingPageFaqs()
    SetLocalLogin()
  }, [])
  

  return (
    <>
    <section  id="doctors" className="doctors">
    <div className={height<=850 && width<=500?"conatiner":"ms-5 conatiner-fluid me-5"}>

    <div className="scroll-view">

   <Container>
   {/* <div className="row"> */}
   <Row>
{
  getPageFaqs.map((items)=>{
    return(
      // className="col-lg-6"
      <Col lg={6} className={height<=850 && width<=500?"mt-2 mb-2":"mb-3"}>
      <div className="card card-essay-exp" style={{borderRadius:"30px"}}>
      <div className="card-body">
      <div className="d-flex p-2 gap-3">
      <img src={ImageOne} alt="" style={{width:"3em"}}/>
      <h2 style={{fontSize:"22px", color:colorScheme.black, fontWeight:"700"}}>{items.title}</h2>
      </div>
      <div className="p-2 paragraph ms-2" style={{fontSize:"16px", color:colorScheme.black}}  dangerouslySetInnerHTML={ { __html: items.body } }>
      {/* {items.body} */}
      </div>
      </div>
      </div>
      </Col>
    )
  })
  
}
  
   {/* col-end */}
   
    
   {/* <div className={height<=850 && width<=500?"col-lg-6 gy-3":"col-lg-6"}>
   <div className="card card-essay-exp" style={{borderRadius:"30px"}}>
   <div className="card-body">
   <div className="d-flex p-3 gap-3">
   <img src={ImageTwo} alt="" style={{width:"3em"}}/>
   <h2 style={{fontSize:"22px", color:colorScheme.black, fontWeight:"700"}}>Select the Best Paper Writer for You</h2>
   </div>
   <div className="p-3 paragraph" style={{fontSize:"16px", color:colorScheme.black}}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, cumque ratione eligendi amet hic totam tenetur alias dolorem blanditiis exercitationem. Adipisci aspernatur, sed excepturi nam cupiditate, rerum minima molestiae repudiandae sint, <br/>alias eaque amet voluptatum possimus quis! Consequatur ipsam est labore nemo iusto reprehenderit esse earum incidunt amet vitae saepe quam optio deserunt voluptate eligendi eum, eos tenetur adipisci voluptates quidem inventore corporis sit aut perspiciatis. <br/>Consectetur reiciendis sunt corrupti accusamus culpa blanditiis nam praesentium animi, temporibus provident vero quod. Eos rerum assumenda sint sed dolor culpa. Deserunt eos unde in accusantium maiores totam facilis nam consectetur ducimus a! Molestias.
   </div>
   </div>
   </div>
   </div> */}

 {/* col-end */}
 
 
 </Row>

   {/* </div> */}
 </Container>
     {/*end-row */}


{/* <div className="row mt-4 mb-4"> 

    <div className="col-lg-6">
   <div className="card card-essay-exp" style={{borderRadius:"30px"}}>
   <div className="card-body">
   <div className="d-flex p-3 gap-3">
   <img src={ImageThree} alt="" style={{width:"3em"}}/>
   <h2 style={{fontSize:"22px", color:colorScheme.black, fontWeight:"700"}}>What Do I Get From Hiring a Professional Essay Writer?</h2>
   </div>
   <div className="p-3 paragraph" style={{fontSize:"16px", color:colorScheme.black}}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, cumque ratione eligendi amet hic totam tenetur alias dolorem blanditiis exercitationem. Adipisci aspernatur, sed excepturi nam cupiditate, rerum minima molestiae repudiandae sint, <br/>alias eaque amet voluptatum possimus quis! Consequatur ipsam est labore nemo iusto reprehenderit esse earum incidunt amet vitae saepe quam optio deserunt voluptate eligendi eum, eos tenetur adipisci voluptates quidem inventore corporis sit aut perspiciatis. <br/>Consectetur reiciendis sunt corrupti accusamus culpa blanditiis nam praesentium animi, temporibus provident vero quod. Eos rerum assumenda sint sed dolor culpa. Deserunt eos unde in accusantium maiores totam facilis nam consectetur ducimus a! Molestias.
   </div>
   </div>
   </div>
   </div> */}

   {/* end-col */}
{/* 
  <div className={height<=850 && width<=500?"col-lg-6 gy-3":"col-lg-6"}>
   <div className="card card-essay-exp" style={{borderRadius:"30px"}}>
   <div className="card-body">
   <div className="d-flex p-3 gap-3">
   <img src={ImageFour} alt="" style={{width:"3em"}}/>
   <h2 style={{fontSize:"22px", color:colorScheme.black, fontWeight:"700"}}>Write My Essay with a User-Friendly Service</h2>
   </div>
   <div className="p-3 paragraph" style={{fontSize:"16px", color:colorScheme.black}}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, cumque ratione eligendi amet hic totam tenetur alias dolorem blanditiis exercitationem. Adipisci aspernatur, sed excepturi nam cupiditate, rerum minima molestiae repudiandae sint, <br/>alias eaque amet voluptatum possimus quis! Consequatur ipsam est labore nemo iusto reprehenderit esse earum incidunt amet vitae saepe quam optio deserunt voluptate eligendi eum, eos tenetur adipisci voluptates quidem inventore corporis sit aut perspiciatis. <br/>Consectetur reiciendis sunt corrupti accusamus culpa blanditiis nam praesentium animi, temporibus provident vero quod. Eos rerum assumenda sint sed dolor culpa. Deserunt eos unde in accusantium maiores totam facilis nam consectetur ducimus a! Molestias.
   </div>
   </div>
   </div>
   </div>


   </div> */}
     {/*end-row */}

     </div>
     {/* end-scroll-view */}
    
    </div>

    </section>
    </>
  )
}

export default EssayWritingExp