import React, {useRef} from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_a6c1kyl', 'template_2aojb0o', form.current, 'WbIsKlRfwtz6O_J7CIMac')
        .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
        }, (error) => {
              console.log(error.text);
        });
    };
    return (
        <section id="contactPage">
            <div id='clients'>
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work a diverse group of companies.
                    some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>
            </div>
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunity.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href='https://www.facebook.com/arpitsingh.yadav.5439' target='FacebookIcon'><img src={FacebookIcon} alt="Facebook" className="link1" /></a>
                        <a href='https://www.linkedin.com/in/arpit-singh-yadav-b675301a1/' target='LinkedinIcon'><img src={LinkedinIcon} alt="Linkedin" className="link2" /></a>
                        <a href="https://github.com/arpit080?tab=overview&from=2023-12-01&to=2023-12-31" target='GithubIcon'><img src={GithubIcon} alt="GitHub" className="link3" /></a>
                        <a href="https://www.instagram.com/mr_arpit_08/" target="InstagramIcon"><img src={InstagramIcon} alt="Instagram" className="link4" /></a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact