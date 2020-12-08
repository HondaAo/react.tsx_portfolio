import React from 'react' 
import { AiOutlineMail } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineLocationMarker} from 'react-icons/hi'
import { Navbar } from '../component/Navbar';
import './Pages.css'
interface ContactProps {

}

export const Contact: React.FC<ContactProps> = () =>{
        return (
            <>
            <Navbar page="contact" />
            <div className="contact-page">
             <div className="contact-left">
                <h1>GET IN TOUCH</h1>
                <p>I am currently university student and seeking job open.</p>
                <ul className="information">
                    <li className="info-li">
                        <FaUniversity />
                        <span>Yokohama national university</span>
                    </li>
                    <li className="info-li">
                        <AiOutlineMail />
                        <span>hondao1207@gmail.com</span>
                    </li>
                    <li className="info-li">
                        <HiOutlineLocationMarker />
                        <span>Yokohama, Japan</span>
                    </li>
                </ul>
             </div>
             <div className="contact-right">
              <div className="contact-card">
               <h1>Say Something</h1>
               <div className="field">
                   <input placeholder="Your Name" />
               </div>
               <div className="field">
                   <input placeholder="Email" />
               </div>
               <div className="field">
                   <textarea></textarea>
               </div>
               <button>SEND</button>
              </div>
             </div>
            </div>
            <div className="contact-footer">
             <h2>Another way of getting in touch</h2>
             <p>I am currently having accounts on twitter, instagram, facebook, github and linkedIn</p>
             <p>For contacting from those platform, please make sure that you contact from official accounts.</p>
             <div className="footer-menu">
                 
             </div>
            </div>
            </>
        );
}