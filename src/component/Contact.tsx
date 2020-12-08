import React from 'react' 
import { AiOutlineMail } from 'react-icons/ai';
import './Navbar.css'

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = () =>{
        return (
            <div className="fixed-btn">
               Contact me<span><AiOutlineMail /></span> 
            </div>
        );
}