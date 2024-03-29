import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Arpit Singh Yadav</span><br/>Website Designer</span>
                <p className="introPara">I am a skilled designer with experience in creating <br/> visually appealing and user friendly Website.</p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile"  className="bg" />
        </section>
    );
}

export default Intro