import React,{useState , useEffect} from 'react';
import{Container, Row, Col} from 'react-grid-system';
import{Accordion} from 'react-bootstrap'
import faqGirl from '../Images/faq-illustrations.svg';
import WindowDimension from './WindowDimension.jsx';
import { AsyncStorage } from 'AsyncStorage';
import axios from 'axios';
import StaticToken from './StaticToken.js';

const Faq = () => {

  const { height, width } = WindowDimension();
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
      const gettingFaqs = (token)=>{
        axios.get(`http://easyeassy.develpify.com/faqs/getfaqs`,{
          headers:{
            Authorization:token
          }
        })
        .then((res)=>{
            setFaqs(res.data.data)
    
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
    <div>
    {/* ======= Departments Section ======= */}
<section id="departments" className="departments bg-light mt-5">
  <div className="container">
    <div className="section-title">
          <div className="card mt-5 faq-card pb-5">
           
            <div className="card-body">
                <h4 className="card-title mt-5" style={{color:"#7367f0"}}>Let's answer some questions</h4>
                <p className="card-text" style={{color:"#6E6B7B"}}>or choose a category to quickly find the help you need</p>
                
                <div className="d-flex justify-content-center mt-4">
                  <div className="col-lg-7">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text pb-3 pt-2" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search faq..." aria-label="Username" aria-describedby="basic-addon1" style={{color: "#6e6b7b"}}/>
              </div>
              </div>
              </div>
              {/* end-row */}
            </div>
            </div>

    </div>
    <div className="row gy-4">
      <div className="col-lg-3 col-md-4  col-sm-12">
        <ul className="nav nav-tabs flex-column mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active show" aria-expanded="true" role="tab" aria-selected="true" data-bs-toggle="tab" href="#tab-1"><i className="fa-solid fa-credit-card me-2 ps-2"></i>Payment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab"  aria-expanded="false" role="tab" aria-selected="false" href="#tab-2"><i className="fa-solid fa-bag-shopping me-2 ps-2"></i>Delivery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-3"><i className="fa-solid fa-arrows-rotate me-2 ps-2"></i>Cancellation & Return</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-4"><i className="fa-solid fa-box-open me-2 ps-2"></i>My Orders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-5"><i class="fa-solid fa-gear me-2 ps-2"></i>Product & Services</a>
          </li>
        </ul>
        <img src={faqGirl} alt="" className="img-fluid mt-4 " style={{height:"15em"}} />
      </div>
      
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="tab-content">
          <div className="tab-pane active" id="tab-1">
          <Container>

            <Row className="gy-4">
              {
              
                
                  <Col lg={12} className="details order-2 order-lg-1">
                  
                  <div className="accordion" id="accordionExample">
          
                      {
                        faqs.filter((items)=> items.category === "1").map((items)=>{
                          return(
                            <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>
                            {items.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                          )
                          
                        })
                      }

                      </div>
                
                </Col>
                
              
           
}
            </Row>
            </Container>
          </div>
          
          <div className="tab-pane" id="tab-2">
          <Container>

            <Row className="gy-4">
              <Col lg={12} className="details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
              {
                        faqs.filter((items)=> items.category === "2").map((items)=>{
                          return(
                            <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>
                            {items.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                          )
                          
                        })
                      }
                    
                    </div>


                </Col>
            </Row>


            </Container>
          </div>



          <div className="tab-pane" id="tab-3">
            <Container>
            <Row className="gy-4">
              <Col lg={12} className="details order-2 order-lg-1">
                <div className="accordion" id="accordionExample">
                {
                        faqs.filter((items)=> items.category === "3").map((items)=>{
                          return(
                            <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>
                            {items.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                          )
                          
                        })
                      }
                    
                </div>


              </Col>
          
            </Row>
            </Container>
          </div>

          <div className="tab-pane" id="tab-4">
          <Container>
            <Row className="gy-4">
              <Col lg={12} className="details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
              {
                        faqs.filter((items)=> items.category === "4").map((items)=>{
                          return(
                            <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>
                            {items.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                          )
                          
                        })
                      }
                    
              </div>

              
              </Col>
         
            </Row>
            </Container>

          </div>

          <div className="tab-pane" id="tab-5">
          <Container>

            <Row className="gy-4">
              <Col lg={12} className="details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
              {
                        faqs.filter((items)=> items.category === "5").map((items)=>{
                          return(
                            <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>
                            {items.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                          )
                          
                        })
                      }
              </div>

              
              </Col>
           
            </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>

    <section className="faq-contact">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 style={{color:"#6E6B7B",fontWeight:"500"}}>You still have a question?</h2>
          <p className="mb-3" style={{color:"#6E6B7B",fontWeight:"300"}}>
          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
            </p>
          </div>

          <div className="col-sm-6">
            <div className="card text-center faq-card-contact shadow-none ">
              <div className="accordion-body">
                {/* <div className="avatar avatar-tag bg-light-primary mb-2  mt-3"> */}
                <i className="fa-solid fa-phone mt-4" style={{fontSize:"22px",color:"#7367f0"}}></i>
                  {/* </div> */}
                  <h4 className="mt-4" style={{color:"#5e5873", fontWeight:"700"}}> + (810) 2548 2568</h4>
                  <span class="text-body text-center" style={{color:"#6E6B7B",fontWeight:"300",opacity:"0.6"}}>We are always happy to help!</span>
                </div>
              </div>
            </div>

            <div className={height<=900 && width<=500?"col-sm-6 gy-2":"col-sm-6"}>
            <div className="card text-center faq-card-contact shadow-none">
              <div className="accordion-body">
                {/* <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto mt-3"> */}
                <i className="fa-solid fa-at mt-4" style={{fontSize:"22px",color:"#7367f0"}}></i>
                  {/* </div> */}
                  <h4 className="mt-4" style={{color:"#5e5873", fontWeight:"700"}}>hello@help.com</h4>
                  <span class="text-body text-center" style={{color:"#6E6B7B",fontWeight:"300",opacity:"0.6"}}>Best way to get answer faster!</span>
                </div>
              </div>
            </div>

        </div>
      </section>
  </div>
</section>
{/* End Departments Section */}


    </div>
  )
}

export default Faq