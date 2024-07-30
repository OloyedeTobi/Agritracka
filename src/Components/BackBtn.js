import React from 'react';
import { Link } from "react-router-dom";

export const BackBtn = () =>{
    return(
        <>
        <button>
             <img src="/assets/arrow_forward.svg" />
            <span><Link to="/">Back To Homepage</Link></span>
        </button>
        </>
    )
    
}