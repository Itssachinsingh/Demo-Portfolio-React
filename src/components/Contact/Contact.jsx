import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'



export const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0z8njeo', 'template_jw1sgte', form.current, 'F8GeO_BvdRMT52mKg')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id='Contact'> 
    {/* left */}
        <div className="w-left">      
            <div className="awesome">
                <span style={{color:darkMode? 'white':''}}>Get In Touch</span>
                <span> Contact Me..,</span>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}>
                </div>
                  </div>
            </div> 
            {/* right  */}
            <div className="c-right">
                <form ref={form} onSubmit = {sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Meassge'/>
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting me!"}</span>
                   <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
                </form>
            </div>
    </div>  
    
  )
}