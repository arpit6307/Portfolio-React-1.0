import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with exprience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>"Crafting intuitive and visually captivating user experiences lies at the heart of my UI/UX design philosophy. With a keen eye for detail and a passion for user-centric design, I specialize in creating seamless digital journeys that delight and engage audiences. From intuitive navigation to pixel-perfect interfaces, I strive to elevate every project with a focus on enhancing usability and overall user satisfaction."</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>"Passionate about crafting captivating digital experiences, I specialize in creating visually stunning and user-friendly websites. With a keen eye for detail and a focus on user experience, I design websites that not only showcase your brand but also engage and delight your audience. Let's collaborate to bring your vision to life and leave a lasting impression in the digital landscape."</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App design</h2>
                        <p>I specialize in creating intuitive and visually captivating mobile applications that prioritize user experience. With a focus on clean interfaces, seamless navigation, and engaging interactions, my designs aim to elevate the functionality and appeal of digital products. From wireframing to prototyping, I strive to deliver innovative solutions that resonate with users and meet the goals of each unique project.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;