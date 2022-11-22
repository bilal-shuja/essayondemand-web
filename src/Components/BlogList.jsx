import{Container, Row, Col} from 'react-grid-system';
import WindowDimension from './WindowDimension.jsx';
import React,{useState, useEffect} from "react";
import BlogListCate from './BlogListCate.js';
import { AsyncStorage } from 'AsyncStorage';
import baseImgURL from './baseURLImg.js'
import {Link } from 'react-router-dom';
import AdSense from 'react-adsense';
import baseURL from './BaseURL.js';
import Slider from "react-slick";
import Data from './BlogData.js';
import axios from 'axios';



const BlogList = () => {
  const[showLength, setShowLength] = useState(5);
  const[getBlogs, setGetBlogs] = useState([])
  const { height, width } = WindowDimension();
  const dataLength = Data.length;
const[isLike, setIsLike] = useState([]);
const[disLike, setDisLike] = useState([]);
const[token , setToken] = useState();
  const SetLocalLogin= async ()=>{
    try{
      let userTOKEN = await AsyncStorage.getItem('token');
      let parsed = JSON.parse(userTOKEN);

      if(parsed !== null){
      
        gettingBlogs(parsed)
        setToken(parsed)
      }
    }catch{
        return null;
    }
  }

  const gettingBlogs = ()=>{
    axios.get(`${baseURL}fetchblog`)
    .then((res)=>{
      setGetBlogs(res.data)

    })
    .catch((error)=>{
      console.log(error);
    })
  }

const likeFun = (id)=>{
  const ID = {
    blog_id:id
  }
  axios.post(`${baseURL}like`,ID)
  .then((res)=>{
    setIsLike(res.data)
    SetLocalLogin()

  })
  .catch((error)=>{
    console.log(error);
  })
}
const dikeFun = (id)=>{
const ID = {
  blog_id:id
}
  axios.post(`${baseURL}dislike`,ID)
  .then((res)=>{
    setDisLike(res.data)
    SetLocalLogin()

  })
  .catch((error)=>{
    console.log(error);
  })
}
  const settings = {
    arrows:true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:height<=900 && width<=500?2:5,
    slidesToScroll: 1,
    centerMode: true,
  };

  useEffect(() => {
    SetLocalLogin()
    gettingBlogs()
   
  }, [])
  
  

  return (
    <div className="blog-section"  style={{marginBottom:"2em",marginTop:"10em"}}>
      {/* <h1 style={{marginTop:"125px", fontWeight:"600",color:" #2c4964"}} className="text-center mb-2"> Blog Page </h1> */}
     <div className={height<=900 && width<=500?"blog-categories mt-3":"container blog-categories mt-3"}>
          <h6 className="section-label mb-3">Categories</h6>
        {/* <div className="d-flex mb-3"> */}
        <Slider {...settings}>
          {
            BlogListCate.map((items)=>{
              return(
                <div className="mb-4">
                <div className={height<=900 && width<=500?"avatar-b-list bg-light-primary-two rounded":"avatar-b-list bg-light-primary-two rounded"}>
                  <div className="avatar-content p-2 text-white" style={{background:"#7367f0",opacity:"0.8"}}>
                 {items.Cate}
                    </div>
                  </div>
              </div>

              )
            })
        
          }

          </Slider>


        
        </div>

       <Container>
          <Row>
  {
    getBlogs.filter((items, index)=> index <= showLength).map((items)=>{
   
      return(
            <Col lg={4} className="mt-3" > 
            <div className="card blog-card h-100 w-100">
              <img src={`${baseImgURL}${items.image}`} className="card-img-top" alt="blog-image" width={50} height={200}/>
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <div className="d-flex">
                  <div className="avatar me-50">
                    <img src={`${baseImgURL}${items.auther_image}`} className="img-fluid" alt="Avatar" width={24} height={24} />
                  </div>
                  <div className="author-info">
                    <small className="text-muted me-25">by</small>
                    <small><a href="#avatar" className="text-body">{items.auther_name}</a></small>&nbsp;
                    <span className="text-muted ms-50 me-25">|</span>
                    <small className="text-muted">{items.Idate}</small>
                  </div>
                </div>
              <div className="my-2">
                <a href="#">
                  <span className="badge rounded-pill badge-light-info me-50">{items.categories}</span>
                </a>
                {/* <a href="#">
                  <span className="badge rounded-pill badge-light-primary">{items.CateTwo}</span>
                </a> */}
            </div>
            <p className="card-text blog-content-truncate" dangerouslySetInnerHTML={ { __html: items.content } }>
              {/* {items.content} */}
            </p>
            <div className="d-flex justify-content-center">
              <hr />
            </div>
            <div className="d-flex justify-content-between align-items-center">
      
          <div className="d-flex justify-content-start">
          <i className="btn btn-outline-danger fa-solid fa-heart me-2" onClick={()=>likeFun(items.id)}></i>{items.likes}&nbsp;
          <i className="btn btn-outline-info fa-solid fa-thumbs-down" onClick={()=>dikeFun(items.id)}></i>&nbsp;{items.dislikes}

          </div>
      
        <Link to={{pathname:`/blogDetails`}} className="fw-bold" state={{id:items.id}}>Read More</Link>
        </div>
      </div>
              {/* end-card-body */}
            </div>
        </Col>
      )
    })}
   </Row>
      </Container>

    

    {dataLength === showLength+1?null:
     <div className={height<=900 && width<=500?"d-grid mx-auto col-4 mt-3":"d-grid mx-auto col-2 mt-3"}>
      <button className="btn btn-outline-primary" onClick={()=>setShowLength(showLength+3)}>Show More</button>
      </div>
      }
          <AdSense.Google
          client='ca-pub-4489610171507023'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
          crossorigin="anonymous"
        />

    </div>
  );
};

export default BlogList;
