import React from "react"
import ContactForm from "../common/form"
import AllHeader from "../common/allheader"

const ContactSection  = () => {
    return (
       < div id="contact" className="contact-continer "> 
   
            <ContactForm />
            <div style={{color:'white', marginTop:'80px',}}>
              <AllHeader />
            </div>
            <hr/>
        </div>  )

}

export default ContactSection