import React from 'react' 
import { Navbar } from '../component/Navbar';
import './Pages.css'

interface AboutProps {

}

export const About: React.FC<AboutProps> = () =>{
        return (
            <>
            <Navbar page="about" />
            <div className="about-page">
             <div className="about-left">
              <div className="about-left-content">
                 <h1>About Me</h1>
                 <p> I was born and raised in Japan, and now I’m proud to be raising my young family here. That’s why I love helping people find their Aurora dream home. Having lived and worked here nearly my entire life, my local market knowledge is unparalleled. As a digital native with a marketing background, 
                   I create highly strategic and engaging marketing campaigns for each and every one of my clients, to make sure their homes get top dollar</p>
                 <p>I have been learning web development for almost a year, but I am confident at making good website, service and managing cloud. I have been trying to go most efficient way of learning programming. To focus my dream of becoming self-employee, I just need a lot of experience.</p>
                 <button className="learn-more">Read More</button>
             </div>   
             </div>
             <div className="about-right">
               <img src="https://images.pexels.com/photos/3040305/pexels-photo-3040305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
             </div>
            </div>
            <div className="my-expperience">
             
            </div>
            </>
        );
}