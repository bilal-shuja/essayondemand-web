import{Container, Row, Col} from 'react-grid-system';
import React,{useState , useEffect} from 'react';
import { AsyncStorage } from 'AsyncStorage';
import{Accordion} from 'react-bootstrap';
import colorScheme from '../Styling.js';
import baseURL from './BaseURL.js';
import axios from 'axios';
// import faqGirl from '../Images/faq-illustrations.svg';
// import WindowDimension from './WindowDimension.jsx';



const FreqAskQuestions = () => {
  const[faqs, setFaqs] = useState([])

    const SetLocalLogin= async ()=>{
        try{
          let userTOKEN = await AsyncStorage.getItem('token');
          let parsed = JSON.parse(userTOKEN);
    
          if(parsed !== null){
          
             gettingFaqs(parsed)
          }
        }catch{
            return null;
        }
      }
      const gettingFaqs = ()=>{
        axios.get(`${baseURL}fetchFaqweb`)
        .then((res)=>{
            setFaqs(res.data)
    
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      useEffect(() => {
        SetLocalLogin()
        gettingFaqs()
      }, [])

     
  
  return (
    <>
        {/* ======= Frequently Asked Questions Section ======= */}
              <section id="doctors" className="doctors">
                <div className="container">
                  <div className="section-title">
                    <h2 style={{color:colorScheme.black}}>Frequently Asked Questions About Our Essay Writing Service</h2>
                  </div>

              <div className="accordion" id="accordionPanelsStayOpenExample">
                      <Container>

                      <Row>

                    {
                        faqs.map((items)=>{
                          return(
                        <Col lg={6}>
                            <Accordion>
                      <Accordion.Item  className="accordion-item p-1" style={{borderRadius:"20px", borderColor:"#367FD3"}} eventKey="0">
                      <Accordion.Header className="accordion-header" >
                        <h2 style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}} >{items.question}</h2>
                      </Accordion.Header>
                        <Accordion.Body dangerouslySetInnerHTML={ { __html: items.answer } }>
                            {/* {items.answer} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    </Col>


                          )
                          
                        })
                      }
{/* end-col */}

  
  {/* <div className="col-lg-6">
  <div className="accordion-item p-1" style={{borderRadius:"20px", borderColor:"#367FD3"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       <h2 className=""style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}}>How do you guarantee that your essay service provides completely original papers?</h2> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <p>Yes, absolutely! When you first sign up, you get a personal order form where you'll be able to provide all instructions and attach any files that your professional paper writers need for successful essay writing.
      <br/>
      Additionally, you will be able to chat with your essay writer, discuss any specific details or ask any questions when you ask them to write a paper for me.
      </p>
      </div>
    </div>
  </div>

  </div> */}
  {/* end-col */}
  </Row>
{/* end-row */}
</Container>

{/* 
<div className="row">

<div className="col-lg-6 gy-2">
<div className="accordion-item p-2" style={{borderRadius:"20px",  borderColor:"#367FD3"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       <h2 className=""style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}}>Will my essay writer follow my order instructions?</h2> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <p>Yes, absolutely! When you first sign up, you get a personal order form where you'll be able to provide all instructions and attach any files that your professional paper writers need for successful essay writing.
      <br/>
      Additionally, you will be able to chat with your essay writer, discuss any specific details or ask any questions when you ask them to write a paper for me.
      </p> 
        </div>
    </div>
  </div> 
</div>
  
   <div className="col-lg-6 gy-2">
<div className="accordion-item p-2"style={{borderRadius:"20px", borderColor:"#367FD3"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingFour" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
       <h2 className=""style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}}>Will my essay writer follow my order instructions?</h2> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div className="accordion-body">
      <p>Yes, absolutely! When you first sign up, you get a personal order form where you'll be able to provide all instructions and attach any files that your professional paper writers need for successful essay writing.
      <br/>
      Additionally, you will be able to chat with your essay writer, discuss any specific details or ask any questions when you ask them to write a paper for me.
      </p>
      </div>
    </div>
  </div> 
  </div> 

  </div> */}


{/* <div className="row">

<div className="col-lg-6 gy-2">
<div className="accordion-item p-2" style={{borderRadius:"20px",  borderColor:"#367FD3"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
       <h2 className=""style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}}>Will my essay writer follow my order instructions?</h2> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div className="accordion-body">
        <p>Yes, absolutely! When you first sign up, you get a personal order form where you'll be able to provide all instructions and attach any files that your professional paper writers need for successful essay writing.
      <br/>
      Additionally, you will be able to chat with your essay writer, discuss any specific details or ask any questions when you ask them to write a paper for me.
      </p> 
        </div>
    </div>
  </div> 
</div>
  
   <div className="col-lg-6 gy-2">
<div className="accordion-item p-2"style={{borderRadius:"20px",  borderColor:"#367FD3"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingSix" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
       <h2 className=""style={{fontSize:"18px",color:colorScheme.black, fontWeight:"500"}}>Will my essay writer follow my order instructions?</h2> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
      <div className="accordion-body">
      <p>Yes, absolutely! When you first sign up, you get a personal order form where you'll be able to provide all instructions and attach any files that your professional paper writers need for successful essay writing.
      <br/>
      Additionally, you will be able to chat with your essay writer, discuss any specific details or ask any questions when you ask them to write a paper for me.
      </p>
      </div>
    </div>
  </div> 
  </div> 
  </div> */}

</div>


  </div>
</section>


{/* End Frequently Asked Questions Section */}


    </>
  )
}

export default FreqAskQuestions