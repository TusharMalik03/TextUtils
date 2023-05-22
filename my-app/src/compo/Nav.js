import React,{useState} from 'react';
import {Link} from "react-router-dom";

export default function Nav(props){
    

  return(
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/About">About Us</Link>
                    </li>
                </ul>
                {/* /* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                 </form> */}
                 <div className="form-check form-switch mx-4" >
                    <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode==='light'?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?"Enable Dark":"Disable Dark"} Mode`}</label>
                 </div> 
                 </div>
            </div>
        </nav>
    </>
    );
}
