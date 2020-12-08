import React from 'react' 
import { Navbar } from '../component/Navbar';

interface WorksProps {

}

export const Works: React.FC<WorksProps> = () =>{
        return (
            <>
            <Navbar page="works" />
            My Works
            </>
        );
}