import React from 'react' 
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import './Navbar.css'
import { animateScroll as scroll } from 'react-scroll';

interface ScrollButtonProps {
  display: string
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({display}) =>{
    const scrollDown = () => {
        scroll.scrollMore(900)
    }
    const scrollUp = () => {
       scroll.scrollToTop()
    }
    console.log(display)
        return (
            <>
            <div className="scroll-btn">
               { display === "Down" && <FaArrowAltCircleDown onClick={scrollDown} /> }
               { display === "Top" && <FaArrowAltCircleUp onClick={scrollUp} />}
            </div>
            { display === "Style" && (
            <div className="scroll-btn2">
             <FaArrowAltCircleUp style={{ color: 'white', backgroundColor: '#060b26'}} onClick={scrollUp} />
            </div>
            )}
            </>
        );
}