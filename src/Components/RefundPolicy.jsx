import React from 'react';
import WindowDimension from './WindowDimension.jsx';
import ImgOne from '../Images/abnormal.svg';
import ImgTwo from "../Images/excel.svg";
import ImgThre from '../Images/Group 11.svg';
import ImgFour from '../Images/Group 13.svg';
import ImgFive from '../Images/Group 14.svg';
import ImgSix from '../Images/Group 16.svg';
import ImgSev from '../Images/Group 15.svg';

import check from '../Images/check2.svg';


const RefundPolicy = () => {
    const { height, width } = WindowDimension();

  return (
    <div>
        <div className="container">
        <h1 style={{marginTop:"4em",fontFamily:"Montserrat", fontSize:"44px", fontWeight:"700",letterSpacing:"-1%"}}>Refund Policy </h1>

        <p style={{fontFamily:"Montserrat", fontSize:"16px", fontWeight:"500",}}>We Recommend You Carefully Read Our Policies Before Availing Our Service</p>
        </div>
        <h3 className="text-center" style={{marginTop:"6em",fontWeight:"600",textTransform:"uppercase",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>
        REFUND POLICY        
        </h3>
        <div className="d-flex justify-content-center mb-4" style={{marginTop:"3em"}}>
        
            <div className="col-lg-10">
                <div className={height<=850 && width<=500?"card me-2 ms-2":"card p-4"} style={{border:"2px solid #2AA5DECC",borderRadius:" 13px"}}>
                    <div className={height<=850 && width<=500?"card p-3":"card p-4"}  style={{border:"1px solid #C8D9EE", borderRadius:"12px",marginTop:"-3em",marginLeft:height<=870 && width<=500?"0":"-3em"}}>
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}>We as a service-providing company is fully committed to delivering the best product keeping in mind all the requirements provided by the customer while placing the order.
                        <br/>  However, failing in doing so and any violation of the company’s commitment, the customer is permitted to claim either a partial or a full reimbursement as per our Money Back Guarantee Policy.</p>
                    </div>
                </div>
            </div>
        </div>
            <h3 className="text-center" style={{marginTop:"5em",fontWeight:"600",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>MONEY-BACK GUARANTEE POLICY</h3>
        <div className="d-flex justify-content-center mb-4" style={{marginTop:"5em"}}>

            <div className="col-lg-10">
                <div className={height<=850 && width<=500?"card me-2 ms-2":"card p-4"} style={{border:"2px solid #2AA5DECC",borderRadius:" 13px"}}>
                    <div className={height<=850 && width<=500?"card p-3":"card p-4"}  style={{border:"1px solid #C8D9EE", borderRadius:"12px",marginTop:"-3em",marginLeft:height<=870 && width<=500?"0":"-3em"}}>
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}>
                        Customer satisfaction is our top priority and we want our customers to be 100% satisfied with our services. Our customer satisfaction rate is high because of our genuine custom writing or academic help and almost 95% of our customers place recurring orders. 
                            However, in some instances commitments remain unfulfilled and, in such situations, our customers can always avail of our Money Back Policy. Our Money Back Guarantee Policy assures our customers that they can request reimbursement if the service provided does not fulfill the requirements and is unsatisfactory.
                            Here, we also want to mention certain situations when you can avail yourself of our full reimbursement policy. These situations are:
                        </p>

                    </div>
                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgOne} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Unassigned Order</p>
                    </div>
                    <p>
                    Sometimes such a situation occurs where the order is not assigned to the writer. And in this 100% amount will be refunded. The customer will be notified as soon as the request is processed. However, if you want another writer to be assigned to your order but you won’t find an appropriate writer, then your claim will be handled by our dispute department. Your case will be reviewed and your refund will be processed accordingly.
                    </p>

                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgTwo} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Order Cancellation by the Customer</p>
                    </div>
                    <p>
                    If the order is being canceled by the customer after assigning and confirmation of the writer, the refund claim would vary from 70% to 100%. This deduction is to cover the effort we put in to assist you with the services you have purchased.

                    </p><div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgThre} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Late Completion of Order</p>
                    </div>
                    <p>
                    This could happen in emergencies or the writer gets ill. The company is liable to compensate for the late submission of the order. In this case, the company representative will follow up with the customer privately, and the mutually agreed amount will be refunded to the customer to compensate for the late delivery of the order. 
                    </p>
                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgFour} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Late Submission of Required Material by the Customer</p>
                    </div>
                    <p>
                    We encouraged customers to provide all the related material for the timely completion of orders. If the required material is not uploaded by the customer and it causes a delay in completing the order, no refund is guaranteed. That is why it is appropriate to send all the related information including any supplementary material that you want to be used at the time of order placement to avoid delays. 
                    </p>

                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgFive} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Submission of Order After First Deadline</p>
                    </div>
                    <p>
                    It is totally on customer discretion whether he wants to release payment or not if the order is submitted after the first deadline.
                    </p>
                    
                
                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgSev} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Unclear Claims</p>
                    </div>
                    <p>
                    Our policies are designed to provide 100% satisfaction to our customers. We try to treat our customers fairly according to our policies and put great emphasis on the implementation of our policies righteously. However, in some cases, if the customer is unsatisfied with the service provided and would request a payment refund, then the company administration will investigate the matter. All the investigations will be conducted fairly and communicated to the customer as well. Approval and denial of refund claims will be based on the outcome of the investigation.
                    </p>

                    <div className="d-flex mt-4">
                        <img className="img-fluid" src={ImgSix} alt="" />&nbsp;
                        <p className="mt-3"style={{color:"#363C41",fontFamily:"Montserrat",fontSize:"19px",fontWeight:'400' ,letterSpacing:"-0.03em"}}>Claim on Plagiarism</p>
                    </div>
                    <p>
                    We have a strict policy against plagiarism. We provide 100% un-plagiarized content and we proudly claim that. But if any customer claim that the help provided by our expert is plagiarized and copied from somewhere else, we would request you to provide a Turnitin report. Only the Turnitin report is accepted in such a situation. Failing in providing so the company will not be entitled to accept the refund claim.
                    </p>
                </div>
            </div>
        </div>

        <section className="eligible-section" id="eligible" style={{background:"radial-gradient(29.56% 74.54% at 50% 50%, rgba(115, 103, 240, 0.1) 0%, rgba(115, 103, 240, 0.02) 100%)"}}>
        <h3 className="text-center" style={{marginTop:"2em",fontWeight:"600",textTransform:"uppercase",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>
        You Are Not Eligible for a refund if
        </h3>

        <div className="d-flex justify-content-center mt-5">
        <div className="col-lg-10">
        <div className={height<=850 && width<=500?"card me-2 ms-2":"card p-4"} style={{border:"2px solid #2AA5DECC",borderRadius:" 13px"}}>
                    <div className={height<=850 && width<=500?"card p-3":"card p-4"}  style={{boxShadow:"1px 1px 16px #C7D9ED",border:"1px solid #C8D9EE", borderRadius:"12px",marginTop:"-3em",marginLeft:height<=870 && width<=500?"0":"-3em"}}>
                        <div className="d-flex">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-6em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>If you have paid some percentage of the total payment to the writer:</b>&nbsp; 
                        This shows that you are satisfied with the writer and accept the  quality of the work. In this case, the paid amount is not refundable. 
                        </p>
                        </div>

                        <div className="d-flex mt-3">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-6em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>If you have paid some percentage of the total payment to the writer:</b>&nbsp; 
                        This shows that you are satisfied with the writer and accept the  quality of the work. In this case, the paid amount is not refundable. 
                        </p>
                        </div>
                        <div className="d-flex mt-3">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-6em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>Not received a high grade as expected:</b>&nbsp; 
                        We deliver a product based on the references and supplementary material provided by you. And can be used as reference material. Therefore, we do not claim high grades. 
                        </p>
                        </div>
                        <div className="d-flex mt-3">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-13em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>Delay in Order Due to Delay in Payment: </b>&nbsp; 
                        We will not be held liable if the client complains that the order has been delayed whereas on investigation we found that the payment has also been delayed. Furthermore, a return is not possible. Note that because the end dates are different in the case of a revision deadline, the previously specified delay refunds and price recalculation do not apply.
                        </p>
                        </div>
                        
                        <div className="d-flex mt-3">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-11em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>Orders for Editing, Proofreading, and Formatting:</b>&nbsp; 
                        please keep in mind that the content you provide for the aforementioned services is originally provided by you and may have contextual mistakes. If an order is canceled, the customer is not permitted to use any of the products given prior to the cancellation. The company retains all rights to the copy.
                        </p>
                        </div>
                        
                        <div className="d-flex mt-3">
                        <img src={check} alt="" className="img-fluid" style={{width:"3em", marginTop:height<=870 && width<=500?"-6em":"-1em"}} />&nbsp;&nbsp;
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}> <b>The refund time has ended:</b>&nbsp; 
                        Refunds are available six months after the transaction date. We are unable to provide a refund if six months have passed since the transaction date.
                        </p>
                        </div>

                    </div>
                </div>
                </div>
        </div>
        </section>


        <h3 className="text-center" style={{marginTop:"2em",fontWeight:"600",textTransform:"uppercase",fontSize:"27px", fontFamily:"Montserrat", color:"#363C41"}}>
        Processing of refunds
        </h3>
        <div className="d-flex justify-content-center mb-4" style={{marginTop:"4em"}}>
            <div className="col-lg-10">
                <div className={height<=850 && width<=500?"card me-2 ms-2":"card p-4"} style={{border:"2px solid #2AA5DECC",borderRadius:" 13px"}}>
                    <div className={height<=850 && width<=500?"card p-3":"card p-4"}  style={{border:"1px solid #C8D9EE", borderRadius:"12px",marginTop:"-3em",marginLeft:height<=870 && width<=500?"0":"-3em"}}>
                        <p style={{color:"#4F5357", fontSize:"16px", fontWeight:"400"}}>
                        The company will execute your refund within two days after you receive the confirmation. Please keep in mind that the company cannot be held liable for any bank transfer fees, or any delays caused by the bank.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default RefundPolicy