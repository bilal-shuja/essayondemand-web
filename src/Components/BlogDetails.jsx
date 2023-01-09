import {Link, useLocation  } from 'react-router-dom';
import{Container, Row, Col} from 'react-grid-system';
import React,{useState, useEffect} from 'react';
import { AsyncStorage } from 'AsyncStorage';
import AdSense from 'react-adsense';
import axios from 'axios';


const BlogDetails = (props) => {
  const[getBlogs, setGetBlogs] = useState([])

  const location = useLocation();
  const { id } = location.state;

  const SetLocalLogin= async ()=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
        gettingBlogs(parsed)
      }
    }catch{
        return null;
    }
  }

  
  const gettingBlogs = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}fetchblog`)
    .then((res)=>{
      setGetBlogs(res.data)

    })
    .catch((error)=>{
      return error;

    })
  }

  useEffect(() => {
    SetLocalLogin();
    gettingBlogs();
  }, [])
  

  return (
    <div   style={{margin:"7em 0 7em 0"}}>
       <Container>
          <Row>
      {
         getBlogs.filter((items)=> items.id === id ).map((items)=>{
           return(

            <Col lg={12}>
            <h3 className="mt-5">Blog Details <div className="vr" style={{marginBottom:"-0.2em"}}></div> <span style={{fontSize:"20px"}}> <Link to="/">Home</Link>  </span> <span style={{fontSize:"18px", marginBottom:"-1.5em"}}> > </span>  <span style={{fontSize:"20px"}}><Link to="/blogs">Blogs</Link></span></h3> 
            <div className="card blog-card">
            <img src={`${process.env.REACT_APP_IMG_URL}${items.image}`} className="card-img-top img-fluid" alt="..." style={{height:"20em"}}/>
            <div className="card-body">
                <h5 className="card-title" style={{  color:"#5e5873",fontWeight:"600"}}>{items.title}</h5>
                <div className="d-flex">
                  <div className="avatar me-50">
                    <img src={`${process.env.REACT_APP_IMG_URL}${items.auther_image}`}  className="img-fluid" alt="Avatar" width={24} height={24} />
                  </div>
                  <div className="author-info">
                    <small className="text-muted me-25">by</small>
                    <small><a href="#avatar" className="text-body">{items.auther_name}</a></small>&nbsp;
                    <span className="text-muted ms-50 me-25">|</span>
                    <small className="text-muted"> {items.Idate}</small>
                  </div>
                </div>
                <div className="my-2 mt-3 mb-3">
                {/* <a href="/blogDetails"> */}
                  <span className="badge rounded-pill badge-light-info me-50">{items.categories}</span>
                {/* </a> */}
                {/* <a href="#">
                  <span className="badge rounded-pill badge-light-primary">{items.CateTwo}</span>
                </a> */}
            </div>
            <p className="card-text text-bold mb-2" style={{color:"black"}} dangerouslySetInnerHTML={ { __html: items.content } }>
           {/* {items.content} */}
            </p>
            
            {/* <h5 className="mt-3"  style={{color:"#5e5873",fontWeight:"600",lineHeight:"1.2"}}>Unprecedented Challenge</h5>
            <ul className="p-0 mb-2" style={{color:"#5e5873",opacity:"0.7"}}>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Preliminary thinking systems</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Bandwidth efficient</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Green space</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Social impact</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Thought partnership</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Fully ethical life</span>
            </li>
            </ul>
            <div className="d-flex align-items-start">
            <div className="avatar">
                <img src={AvatarFour} className="mt-4" width={60} height={60} alt="Avatar" />
            </div>
            <div className="author-info">
                <h6 className="fw-bolder-blog-details mt-4 ms-3">Willie Clark</h6>
                <p className="card-text mb-0 ms-3" style={{color:"#5e5873",opacity:"0.7"}}>
                Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos
                and quotes by influential creatives and web designer around the world.
                </p>
            </div>
            </div> */}
            </div>
            </div>
        </Col>
           )
      


         })}
     </Row>
      </Container>
      <AdSense.Google
          client='ca-pub-4489610171507023'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
          crossorigin="anonymous"
        />
    </div>
  )
}

export default BlogDetails