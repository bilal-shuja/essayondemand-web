import React from 'react';
import WindowDimension from './WindowDimension.jsx';
import mainSvg from '../Images/OurGuarantees/undraw_agree_re_hor9.svg';
import imgOne from '../Images/OurGuarantees/stopwatch.svg';
import imgTwo from '../Images/OurGuarantees/file-focus.svg';
import imgThree from '../Images/OurGuarantees/file-success.svg';
import imgFour from '../Images/OurGuarantees/copy-one.svg';

const OurGuarantees = () => {
    const { height, width } = WindowDimension();

  return (
    <>
     <section id="our-Guarantees" style={{marginTop:"8em",background:" radial-gradient(29.56% 74.54% at 50% 55.95%, rgba(115, 103, 240, 0.1) 0%, rgba(115, 103, 240, 0.02) 100%)"}}>
         <div className="container">
             <div className="row">
                <div className="col-lg-6 mt-5">
                <h1  style={{marginLeft:height<=900 && width<=500?null:"3em",color:"#2F2E41",fontWeight:"700",fontFamily:"Montserrat"}}>Our guarantees</h1>
                <p  style={{marginLeft:height<=900 && width<=500?null:"7.5em",fontSize:"16px",fontWeight:"500",fontFamily:"Montserrat"}}>Our quality is unmatched. Our guarantees are the best.</p>
                </div>
                <div className="col-lg-6">
                <img src={mainSvg} className="img-fluid h-75 w-100" alt="our-guarantee"/>
                </div>
             </div>

             <section className="content-section" style={{marginTop:"2em"}}>
                <div className="row">
                    <div className="col-lg-10">
                    <p className="text-center" style={{marginLeft:height<=900 && width<=500?null:"11em", fontWeight:"600"}}>We know that these days people are suspicious of online services. That’s why to build trust, Essayondemand offers a complete refund under the circumstances listed below.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <div className="card p-5" style={{borderRadius: "13px",borderColor:"#2AA5DECC", borderWidth:"2px"}}>
                        <div className="d-flex">
                        <img src={imgOne} alt="stop-watch" style={{marginLeft:"-0.5em"}}/>&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"19px",fontWeight:"bold",color:"#363C41",marginTop:"1em"}}>On-Time Guarantee</p>
                        </div>
                        <p style={{color:"#4F5357",fontWeight:"500",lineHeight:"27px"}}>
                        Meeting the deadline on time is the major concern of many of our customers. The stress of an impending deadline has been the source of fear for many. However, you can trust us with your essay or any other writing order. To ease this concern, we ensure that you’ll receive your order before the deadline that you set for us and have your order prior to its original deadline. We guarantee that we will fulfill the requirements of your order that you place with us within the set timeframe. Even if you are close to the deadline already, we will be able to meet your needs. Our writers work around the clock and are available on a 24-7 basis. The deadline guarantee that we give is backed by our money-back guarantee. It is an extremely rare event in which we fail to deliver the assignment on time. Yet, should this happen, you will get your funds immediately
                        </p>
                        

                        <div className="d-flex">
                        <img src={imgTwo} alt="stop-watch" style={{marginLeft:"-0.5em"}}/>&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"19px",fontWeight:"bold",color:"#363C41",marginTop:"1em"}}>Confidentiality Guaranteed </p>
                        </div>
                        <p style={{color:"#4F5357",fontWeight:"500",lineHeight:"27px"}}>
                        With our Confidentiality Guarantee, you'll never need to worry again. Our Confidentiality Guarantee protects against hackers, Internet service providers, web browsers, and software bugs that may otherwise cause your data to be vulnerable. Also, we never share any of your personal details with anyone. Our business transactions are confidential and secure by all means.
                        </p>

                        <div className="d-flex">
                        <img src={imgThree} alt="stop-watch" style={{marginLeft:"-0.5em"}}/>&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"19px",fontWeight:"bold",color:"#363C41",marginTop:"1em"}}> Quality Assurance Department </p>
                        </div>
                        <p style={{color:"#4F5357",fontWeight:"500",lineHeight:"27px"}}>
                        Our quality assurance department is dedicated to making sure that the content you receive from our writers is of the highest quality. They are conscientious individuals who are always looking for ways to refine their work so that it can be as good as possible. They will also ensure that your order is completed well before the deadline, so you can have peace of mind knowing that your essay will be delivered on time, every time.
                        </p>

                        <div className="d-flex">
                        <img src={imgThree} alt="stop-watch" style={{marginLeft:"-0.5em"}}/>&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"19px",fontWeight:"bold",color:"#363C41",marginTop:"1em"}}>Accuracy Guarantee</p>
                        </div>
                        <p style={{color:"#4F5357",fontWeight:"500",lineHeight:"27px"}}>
                        At Essayondemand we are proud to offer accuracy guarantee. This is one guarantee that cannot be found anywhere else in the industry. It means you will receive the order exactly according to your given instructions. We’ll make sure you receive what you need, what you want and what you had in mind.
                        </p>

                        <div className="d-flex">
                        <img src={imgFour} alt="stop-watch" style={{marginLeft:"-0.5em"}}/>&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"19px",fontWeight:"bold",color:"#363C41",marginTop:"1em"}}>Plagiarism Free Paper</p>
                        </div>
                        <p style={{color:"#4F5357",fontWeight:"500",lineHeight:"27px"}}>
                        Plagiarism can work against your success by ruining your career. At Essayondemand we do not allow this to happen. Therefore, every paper submitted to us is made from scratch. You can be confident that the paper we provide you with is 100% authentic and original. This is one of the many high standards to which we hold our writers. Before you receive the paper that our writer has produced, it is checked by our anti-plagiarism software. We do not allow any copying and pasting from other sources. Every paper is built from the ground up, starting with quality, in-depth research. The papers are made according to the specific requirements of each client and can even be formatted to suit your writing style.
                        </p>

                    </div>
                </div>
             </section>

         </div>
        </section>   

    </>
  )
}

export default OurGuarantees