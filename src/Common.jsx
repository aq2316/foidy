import React from 'react'
import web from "../src/images/Roadmapping.svg";
import { NavLink } from "react-router-dom";



const  Common = () => {
  return ( 
  <>
    <section id="header" className="d-flex align-item-center" >
    <div className="container-fluid nav_bg">
             <div className='row'>
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                      <h1> Welcome to About <strong className="brand-name" >FODIEY</strong> </h1>   
                      <h2 className="my-3">
                        We are team of web developer
                      </h2>
                      <div className="mt-3" >
                         <NavLink to="/contact" className="btn-get-started">Contact us</NavLink>
                      </div> 
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src={web} className="img-fluid animated" alt="home img" />
                   </div>
                   </div>
                </div>
             </div>
        </div>
    </section>
  </>
  );
};

export default Common;