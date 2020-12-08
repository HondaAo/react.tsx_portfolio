import React, { useEffect, useState } from 'react' 
import './Pages.css'
import * as FaIcons from 'react-icons/fa'
import { Contact } from '../component/Contact';
import { Link } from 'react-router-dom';
import { Navbar } from '../component/Navbar';
import { ScrollButton } from '../component/ScrollButton';
import { FaAws, FaCss3Alt, FaDocker, FaHtml5, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { SiCircleci, SiGraphql, SiJavascript, SiKubernetes, SiPostgresql, SiRails, SiTypescript } from 'react-icons/si'

const scrollTop = (): number => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

export const Home: React.FC = () =>{
    const [ display, setDisplay ] = useState("Down")
    const onScroll =(): void=>{
        const position = scrollTop();
      　if (position >= 80 && position < 1120) {
        setDisplay("Top");
      　} else if(position >= 1120) {
        setDisplay("Style");
      　}else{
        setDisplay("Down")
      }
    }
    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    });
        return (
            <>
            <Navbar page="home" />
            <div className="home-page">
                <h1>Full Stack Web Developer</h1>
                <p>Based in Japan, I am full stack web developer and good at react.js, node.js and AWS</p>
                <p>You can get in touch with me from here.</p>
                <Link to="/works"><button className="btn contact-btn">My Works<span>{' ＞ '}</span></button></Link><Link to="/about" className="btn about-btn">About me<span>{' ＞ '}</span></Link ><br />
                <FaIcons.FaFacebook className="icon" /><FaIcons.FaTwitter className="icon" /><FaIcons.FaGithub className="icon" /><FaIcons.FaInstagram className="icon" />
            </div>
            <div className="skills">
                <div className="skills-left">
                 <h2>My Skill Set <br /> as Full Stack Developer</h2>
                 <p>Integrate quickly and scale seamlessly.</p>
                 <button>Learn more about skills</button>
                </div>
                <div className="skills-right">
                 <div className="skills-circle">
                  <div className="skills-icons">
                   <FaVuejs  className="skills-icon"/>
                   <FaReact  className="skills-icon"/>
                   <SiJavascript  className="skills-icon"/>
                   <br />
                   <FaHtml5  className="skills-icon"/>
                   <FaCss3Alt  className="skills-icon"/>
                   <SiRails  className="skills-icon"/>
                   <FaAws  className="skills-icon"/>
                   <br />
                   <FaDocker  className="skills-icon"/>
                   <FaPhp  className="skills-icon"/>
                   <SiKubernetes  className="skills-icon"/>
                   <SiCircleci  className="skills-icon"/>
                   <br />
                   <SiGraphql  className="skills-icon"/>
                   <SiTypescript  className="skills-icon"/>
                   <SiPostgresql  className="skills-icon"/>
                  </div>
                 </div>
                </div>
            </div>
            <div className="guide-app">
                <div className="guide-left">
                </div>
                <div className="guide-right">
                 <h2>My Recent Work <br />Guide macthing application</h2>
                 <p>Get the data you need when and where you want it. No coding necessary.</p>
                 <button>Watch all of my works</button>
                </div>
            </div>
            <div className="aboutme">
              <h1>About me</h1>
              <p>Use your preferred implementation method to integrate seamlessly with other tools in your workflow.</p>
            </div>
            <ScrollButton display={display} />
            <Contact />
            </>
        );
}