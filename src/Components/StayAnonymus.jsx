import React from 'react';
import colorScheme from '../Styling.js'
import hackerBoy from '../Images/undrawhacker.svg';

const StayAnonymus = () => {
  return (
    <>
      <section  id="doctors" className="doctors">
        <div className="container">
        <div className="stayAnon-box">
          <div className="row justify-content-center">
            <h2 className="stayAnon-title text-center p-4">
              <span style={{color:colorScheme.mainColor,fontSize:"24px", fontWeight:"800", textTransform:"uppercase"}}>Stay Anonymous</span><br/>
              <span style={{color:colorScheme.black, fontSize:"24px"}}>With Our Essay Writing Service</span>
            </h2>
            <img className="img-fluid ms-5" src={hackerBoy} alt="" style={{width:"14em"}}/>

            <p className="text-center AnonyPara p-4 ms-1" style={{color:colorScheme.black,fontWeight:"500",zIndex:"2"}}>
            The aim of our service is to provide you with top-class essay help when you ask us to write my paper; we do not collect or share any of your personal data. We use the email you provide us to send you drafts, final papers, and the occasional promotion and discount code, but that’s it! No payment data is stored in our database after you pay for essay tasks. Entrust your assignments to our essay writers today, and save time for other important things.
            <br/>

         <button className="mt-5 btn btn-outline-light paper-writing-card p-3 writer-button col-4" type="button" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white}}>Sign Up</button>
        </p>
       
            </div>
          </div>
      
    </div>
    </section>
    </>
  )
}

export default StayAnonymus