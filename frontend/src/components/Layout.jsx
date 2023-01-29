import React from "react";
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    return (  
    <React.Fragment>
        {/* <div className='items-center container mx_auto'> */}
        <div className='mx-auto  items-center'>
            <Navbar />
            {children}
        </div>   
        
    </React.Fragment> 
    )
} 