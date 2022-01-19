import React from 'react';
import Clientsdata from '../pages/Clientsdata';

import {
    Link
  } from "react-router-dom";

const Client = () => {
  return (
    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item sidebar"><Link to="/" class="nav-link text-dark font-italic " style={{color: 'white'}}><i class="bi bi-list-ul"></i> &nbsp; &nbsp; All Clients</Link></li>
                <li class="nav-item"><Link to="/AddClient" class="nav-link text-dark font-italic"><i class="bi bi-plus-square"></i> &nbsp; &nbsp; New Client</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" style={{padding: '0rem'}} >
                
                <div style={{background:"white",height:"7rem",width:"82vw",display:"flex",flexDirection:"row"}}>    
                    <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"2rem"}}> Clients</p>
                    <div style={{fontSize: "25px" ,marginTop:"1rem", fontWeight:"bold",float:"right" ,marginLeft:"75%" }}>  
                    <Link  className="btn btn-default" to="/AddClient"> <i class="bi bi-plus-square"></i>&nbsp;Add new client</Link></div>
                </div>
                <div  style={{background:"white",marginTop:"2%",marginLeft:"3%" ,height:"25rem",width:"79.5vw",display:"flex",flexDirection:"row"}}>
                    <div style={{marginLeft:"7rem" ,marginTop:"2%"}}> 
                        <Clientsdata></Clientsdata>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

  );
};

export default Client;