import{Container, Row, Col} from 'react-grid-system';
import {Link , useLocation} from 'react-router-dom';
import React,{useState , useEffect} from 'react';
import { DynamicStar } from 'react-dynamic-star';
import WindowDimension from './WindowDimension';
import CardLine from '../Images/CardLine.svg';
import { AsyncStorage } from 'AsyncStorage';
import axios from 'axios';

const AboutWriter = () => {
    const { height, width } = WindowDimension();
    const[getWriters, setWriters] = useState([]);
    const[getContent, setContent] = useState([]);
    const[getCustomReview , setCustomReview] = useState([]);

    const Location = useLocation();
    const{id} = Location.state;
    const ID = id;

    const SetLocalLogin= async ()=>{
        try{
          let userTOKEN = await AsyncStorage.getItem('token');
          let parsed = JSON.parse(userTOKEN);
    
          if(parsed !== null){
          
            gettingWriters(parsed)
            gettingContent(parsed)
            gettingCustomerReview(parsed)
          }
        }catch{
            return null;
        }
      }
      const gettingWriters = ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}fetchwriter`)
        .then((res)=>{
            setWriters(res.data)
            
        })
        .catch((error)=>{
            return error;
        })
      }
      const gettingContent = ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}fetchwritercontent`)
        .then((res)=>{
            setContent(res.data)

    
        })
        .catch((error)=>{
            return error;
        })
      }

      const gettingCustomerReview = ()=>{
       
        axios.get(`${process.env.REACT_APP_BASE_URL}fetchwriterdummyreviews`)
        .then((res)=>{
            setCustomReview(res.data)
    
        })
        .catch((error)=>{
            return error
        })
      }


      useEffect(() => {
        SetLocalLogin()
        gettingWriters()
        gettingContent()
        gettingCustomerReview()
      }, [])
  return (
    <>
        <section id="about-writer" style={{marginTop:"6em"}}>
        <h5 className="mb-5 ms-4">About Writers <div className="vr" style={{marginBottom:"-0.2em"}}></div> <span style={{fontSize:"20px"}}> <Link to="/">Home</Link>  </span> <span style={{fontSize:"18px", marginBottom:"-1.5em"}}> / </span>  <span style={{fontSize:"20px"}}><Link to="/Writers">Writer #&nbsp;{ID}</Link></span></h5> 
        {
        getWriters.filter((item)=> item.id === ID).map((items)=>{
            return(
            <h1 className="ms-5" style={{color:"#0e101a",lineHeight:"3",fontFamily:"Roboto,sans-serif",fontWeight:"600"}}>{items.writer_name}</h1>
            )
            })    
        }
    
        <Container>
            <Row>
                {
                    getWriters.filter((item)=> item.id === ID).map((items)=>{
                        return(
                            <div className={height<=850 && width<=500?"p-5 col-lg-3":"col-lg-3"}>
                            <div className="position-sticky">
                            <div className="card p-3" style={{borderRadius:"20px",border:"1px solid #c8d9ee",boxShadow:"0 0 16px 2px rgb(54 127 211 / 18%)"}}>
                                <div className="writer-img">
                                    <img className="img-fluid mx-auto d-block p-1" src={`${process.env.REACT_APP_IMG_URL}${items.avatar}`} alt="" width={90} style={{borderRadius:"50%",border:"1px solid #eeeeee"}}/>
                                </div>
        
                                <div className="writer-info">
                                    <div className="writer-name text-center pt-2" style={{color:"#0e101a",fontSize:"18px",fontWeight:"700"}}>{items.writer_name}</div>
                                    <div className="writers-rating d-flex justify-content-center">
                                        <p style={{fontSize:"18px",color:"#92abc9",fontWeight:"700",marginTop:"0.9em"}}>{items.rating}</p>&nbsp;
                                        <DynamicStar className="img-fluid" rating={items.rating} alt="" width={18} height={18}/>
                                    </div>
                                    <div className="writers-review text-center ms-4" style={{fontSize:"16px",color:"#92abc9",fontWeight:"500",marginTop:"-1em"}}>
                                        ({items.num_of_reviews} reviews)
                                    </div>
                                </div>
                                <img className="img-fluid mt-4 ms-2" src={CardLine} alt="" />
                                <div className="d-flex justify-content-between mt-3">
                                                <p style={{fontSize:"18px",marginTop:"5px",fontWeight:"500",color:"#A49BFF"}}>Total orders:</p>
                                                <p className="align-items-center"style={{fontSize:"24px",fontWeight:"600",color:"#7367F0"}}>{items.total_orders}</p>
                                        </div>
                                    <Link to="/" className="hire-writer-btn btn btn-light p-3 mb-3" style={{color:"#fff", borderRadius:"5px",backgroundColor:"#7367f0"}}> Hire Writer</Link>
                            </div>
                            </div>
                        </div>    
                        )
                    })              
                }

                <div className="col-lg-9">
                    <h4 className="ms-4" style={{color:"#0e101a",fontFamily:"Roboto,sans-serif",fontWeight:"600"}}>  Orders by Subject</h4>
                    <div id="order-by-subject">
                        
                        <Container>
                        <div className="card p-4" style={{borderRadius:"10px",backgroundColor:"#f5f9ff", borderLeft:"8px solid #367fd3"}}>
                        <Row className="row p-3">
                            {
                                // .filter((items)=> items.writer_id === ID)
                                getContent.map((items)=>{
                                    return(
                                        <div  className="mb-5 col-lg-4">
                                        <div className="subject-info d-flex justify-content-between" style={{color:"0e101a"}}>
                                            <div className="subject-name" style={{fontSize:"13px"}} >
                                            {items.subject}
                                            </div>
                                            <div className="subject-num"  style={{fontSize:"13px"}}>
                                                {items.num_of_orders}
                                            </div>
                                        </div>
                                        <div className="progress mt-2" style={{height:"4px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: `${items.progress_ratio}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    )
                                })
                                
                            }
                           
                           
                        </Row>
                    </div>
                        </Container>
                    
                    </div>



                    <h4 className="mt-5 ms-4" style={{color:"#0e101a",fontFamily:"Roboto,sans-serif",fontWeight:"600"}}>  Orders by Type</h4>
                    <div id="order-by-type">
                    <Container>
                        <div className="card p-4" style={{borderRadius:"10px",backgroundColor:"#f5f9ff", borderLeft:"8px solid #367fd3"}}>
                        <Row className="row p-3">
                            {
                                // .filter((items)=> items.writer_id === ID)
                                 getContent.map((items)=>{
                                     return(
                                        <div className="mb-5 col-lg-4">
                                        <div className="subject-info d-flex justify-content-between" style={{color:"0e101a"}}>
                                            <div className="subject-name" style={{fontSize:"13px"}} >
                                            {items.order_by}
                                            </div>
                                            <div className="subject-num"  style={{fontSize:"13px"}}>
                                            {items.order_num_two}

                                            </div>
                                        </div>
                                        <div className="progress mt-2" style={{height:"4px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width:`${items.progress_ratio_two}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                     )
                                    
                                })
                            }
                         
                            
                        </Row>
                    </div>
                        {/* card-end */}
                    </Container>
                    
                    </div>

                    {
                     getWriters.filter((items)=> items.id === ID).map((items)=>{
                    return(
                    <h2 className="Writers_Review mt-4 mb-2" style={{color:"#0E101A", fontWeight:"700", fontSize:"24px"}}>Customer Reviews({items.num_of_reviews})</h2>
                    )
                    })            
                    }
                        {/* .filter((items)=> items.writer_id === ID) */}
                    <Row>
                        {
                            getCustomReview.map((items)=>{
                                return(
                                    <Col lg={6} className="mt-3">
                                    <div className="card " style={{
                                        border:"1px solid #c8d9ee",
                                        borderRadius:"20px",
                                        boxShadow:" 0 0 16px 2px rgb(54 127 211 / 18%)",
                                        padding:"30px 20px"
                                    }}>
                                    
                                    <div className="customer_review text-center" style={{fontSize:"18px", color:"#92abc9"}}>
                                        Customer ID: <span className="review_id">{items.customer_id}</span>
                                    </div>
                                    <img className="img-fluid mt-4 ms-2" src={CardLine} alt="" style={{opacity:"0.3"}} />
                                    <div className="rating d-flex justify-content-center mt-3">
                                    <DynamicStar className="img-fluid" rating={items.rating} alt="" width={20} height={20}/>
                                    </div>
                                    <div className="writer-type text-center mt-3">
                                        <span className="writer-type-text" style={{color:"#367fd3", fontSize:"18px",fontWeight:"600"}}>{items.order_by}</span>
                                    </div>

                                    <div className="customer-feedback text-center mt-2" style={{fontSize:"16px"}}>
                                        {items.feedback}
                                    </div>


                                    <div className="review-date text-center" style={{ marginTop:"50px"}}>
                                        <span style={{color:"#92abc9"}}>{items.date}</span>
                                    </div>
                                    </div>
                                </Col>
                                 )
                            })  
                       
                      
                        }
                    </Row>

                </div>
                </Row>

        </Container>


    </section>
    </>
  )
}

export default AboutWriter