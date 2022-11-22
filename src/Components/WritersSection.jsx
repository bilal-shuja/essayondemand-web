import React,{useState, useEffect} from 'react';
import colorScheme from '../Styling.js';
import mainSvg from '../Images/WritersImg.svg';
import Ellipse from '../Images/Ellipse 2.svg';
import Edit from '../Images/EditPencil.svg';
import WindowDimension from './WindowDimension';
import {Link} from 'react-router-dom'
// import Avatar from '../Images/avatar.jpg';
// import WritersRating from '../Images/WritersRating.svg';
import CardLine from '../Images/CardLine.svg';
import { DynamicStar } from 'react-dynamic-star';
// import WritersData from './WritersData.js';
import{Container, Row, Col} from 'react-grid-system';
import { AsyncStorage } from 'AsyncStorage';
import StaticToken from './StaticToken.js';
import axios from 'axios';



const WritersSection = () => {
    const { height, width } = WindowDimension();
    const[showLength, setShowLength] = useState(5);
    
    const[getWriters, setWriters] = useState([])
    const dataLength = getWriters.length;
    const SetLocalLogin= async ()=>{
        try{
          let userTOKEN = await AsyncStorage.getItem('token');
          let parsed = JSON.parse(userTOKEN);
    
          if(parsed !== null){
          
            gettingWriters(parsed)
          }
        }catch{
            return null;
        }
      }

      const gettingWriters = (token)=>{
        axios.get(`http://easyeassy.develpify.com/writer/getwriters`,{
          headers:{
            Authorization:token
          }
        })
        .then((res)=>{
            setWriters(res.data.data)
    
        })
        .catch((error)=>{
          console.log(error);
        })
      }

      useEffect(() => {
        SetLocalLogin()
      }, [])
      
  return (
    <div>
         <section  id="doctors" className="doctors Writers-section" style={{background:colorScheme.figmaBackgroundThree}}>
             <div className="container ">
                 <div className="row">
                     <div className="col-lg-7" style={{marginTop:"6em"}}>
                         <h1 style={{fontSize:"48px",lineHeight:"59px",color:"#2F2E41",fontWeight:"700", letterSpacing:"-0.01em"}}>Lorem ipsum dolor sit</h1>
                            <p style={{fontWeight:"500",lineHeight:"24px",fontSize:"16px",color:"#363C41"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. </p>
                            <div className="mt-5">
                            <button
                            href="#about"
                            className="btn btn-outline-light btn-get-started scrollto"
                            style={{marginRight:"-1.2em"}}        
                            >
                            Lorem ipsum
                            </button>
                            <img src={Ellipse} alt="" className="img-fluid"/>
                            <img src={Edit} alt="" className="img-fluid" style={{marginLeft:"-2.8em"}} />
                            </div>

                     </div>
                     <div className="col-lg-5">
                        <img className="img-fluid"src={mainSvg} alt="" style={{width:"20em"}}/>
                     </div>
                 </div>
                 {/* end-row */}
                 <div className="d-flex justify-content-center">
                 <hr style={{width:"100%",marginTop:"6.8em"}}/>
                 </div>
                <div className="input-group mb-3" style={{marginTop:"3em"}}>
                    <div className={height<=850 && width<=500?"col-7":"col-4"}>
                        <select className="form-select" id="writer-select"aria-label="Default select example" style={{border:"1px solid #367FD3",borderRadius:"10px",fontSize:"19px",fontWeight:"500"}}>
                            <option selected>Choose Subject</option>
                            <option value={1}>Agriculture</option>
                            <option value={2}>Architecture</option>
                            <option value={3}>Biological Science</option>
                            </select>

                         </div>
                     <button className="btn btn-outline-light text-white ms-4" style={{borderRadius:"3px", width:"111px", background:"linear-gradient(276.79deg, #7367F0 1.81%, rgba(42, 165, 222, 0.7) 94.81%)"}}> Reset All</button>
                </div>

             </div>
             <Container>

            <Row>
            {
                getWriters.filter((items, index)=> index <= showLength).map((items)=>{
                    return(
                        <Col lg={4} className="mt-3" style={{width:"23em"}} >
                        <div className="card p-3" style={{background:"#FFFFFF",boxShadow:"0px 6px 8px rgba(199, 217, 237, 0.8)",border:"1px solid #7367F0", borderRadius:"20px"}}>
                            <div className="card-body">
                                <div className={height<=850 && width<=500?"d-flex gap-5":"d-flex"}>
                                    <div className="col-lg-6">
                                <img className="img-fluid p-1" src={items.avatar} alt="" style={{width:"5em",borderRadius:"4px",boxShadow:"0px 4px 4px #7367F0",border:"1px solid #7367F0"}} />
                                </div>
                                <div className="col-lg-6">
                                    <p className="mt-1"style={{fontSize:"18px",fontFamily:"Montserrat",fontWeight:"500",letterSpacing:"0.05em",color:"#0E101A"}}>{items.writer_name}</p>
                                    <div className="d-flex" style={{marginTop:"-0.7em"}}>
                                    <p  style={{fontSize:"21px",fontWeight:"600",color:"#7367F0",marginLeft:"-1em",marginTop:"-0.2em"}}>{items.rating} &nbsp;</p>&nbsp;
                                    <DynamicStar className="img-fluid " rating={items.rating} alt="" width={22} />
                                    </div>
                                    <p className="text-center"style={{color:"#A49BFF", marginTop:"-3em"}}>({items.num_of_reviews} reviews)</p>
            
                                    </div>
                                </div>
                                <img className="img-fluid mt-4 ms-3" src={CardLine} alt="" />
                                <div className="d-flex justify-content-between mt-3">
                                        <p style={{fontSize:"18px",marginTop:"5px",fontWeight:"500",color:"#A49BFF"}}>Total orders:</p>
                                        <p className="align-items-center"style={{fontSize:"24px",fontWeight:"600",color:"#7367F0"}}>{items.total_orders}</p>
                                </div>
            
                                <div className="d-flex gap-4 mt-4">
                                <Link to="/AboutWriter"  state={{id:items.id}}className="btn btn-outline-primary about-writer ms-3" style={{borderRadius:"3px", width:"117px",border:"1px solid #367FD3"}}> About Writer</Link>
                                <button className="btn btn-light text-white hire-writer" style={{borderRadius:"3px", width:"111px",background:"linear-gradient(276.79deg, #7367F0 1.81%, rgba(42, 165, 222, 0.7) 94.81%)"}}>Hire Writer</button>
                                
                                </div>
                            </div>
                        </div>
                        </Col>

                    )
                })
               
            }   
            </Row>

            </Container>
            {dataLength === showLength+1?null:
     <div className={height<=850 && width<=500?"d-grid mx-auto col-4 mt-3":"d-grid mx-auto col-2 mt-3"}>
      <button className="btn btn-outline-primary" onClick={()=>setShowLength(showLength+3)}>Show More</button>
      </div>
      }

            {/* end-row */}

             {/* end-container */}
         </section>
    </div>
  )
}

export default WritersSection