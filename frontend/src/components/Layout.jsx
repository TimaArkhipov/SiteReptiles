import React from "react";
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <div className='conrainer mx_auto'>
            <Navbar />
            {children}
        </div>   
    </React.Fragment>
    )
} 