import ClientForm from "./ClientForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NewClientForm from "./NewClientForm";

import React, { Component , useState} from 'react';
import axios from 'axios';
const AddClient = () => {
    const [req, setReq] = useState({
        operator_id: '',
        provider_id: '',
        weblink: '',
        subscriptionkey: '',
        short_code: '',
        gracedays: '',
        pinflow: '',
        billingSC: '',
        provider_redirect_url: '',
        package_id: '',
        service_code_campaign: '',
        service_code:'',
        client_id:'26'

        
        
    })


    const handleChange = (e) => {
        setReq({ ...req, [e.target.name]: e.target.value })
        console.log(req)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const res = axios.post('https://dev.digitalizehub.com/api/admin/client', req, config)
            alert("Sucess")
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }



    }


  return (
    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item"><Link to="/" class="nav-link text-dark font-italic  "><i class="bi bi-list-ul"></i> &nbsp; &nbsp; &nbsp; All Clients</Link></li>
                <li class="nav-item"><Link to="/AddClient" class="nav-link text-dark font-italic bg-light"><i class="bi bi-plus-square"></i> &nbsp; &nbsp; &nbsp; New Client</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" >
                    
                <div  style={{background:"white",height:"7rem",width:"85rem"}}>
                    <p><Link style={{marginLeft:"2rem",color:"gray"}} to="/"> Clients </Link> &nbsp; / &nbsp; Create client</p>



                    <div style = {{display:"flex",flexDirection:"row"}}>
                    <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2rem" ,marginTop:"1rem"}}> <i class="bi bi-arrow-left"></i> &nbsp;&nbsp;Create Client</p>
                    
                    <div style={{fontSize: "25px" ,marginTop:"1rem", fontWeight:"bold",float:"right" ,marginLeft:"50rem" ,display:"flex",flexDirection:"row"}}>  
                    <button type="button" class="btn btn-outline"> &nbsp;Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success" onClick={handleSubmit }> &nbsp;Create</button>
                    
                    
                    </div>

                    </div>
                   
                </div>
                <div  style={{background:"white",marginTop:"2%",marginLeft:"1%" ,height:"40rem",width:"84rem",display:"flex",flexDirection:"row"}}>
                    <div style={{marginLeft:"3%" ,marginTop:"2%"}}> 

                    <form onSubmit={handleSubmit}>
        

    <div style ={{display:"flex",flexDirection:"row"}}>
        
        <div className="col-9">
            <p style={{fontSize: "25px" , fontWeight:"bold",color:"#03A9F4"}}> Client info</p>

            <div className="form-row" style ={{display:"flex",flexDirection:"row"}}>
            <div className="form-group col-md-5">
                <label htmlFor="inputEmail4">Subscription key </label>
                <input type="text" className="form-control" name="subscriptionkey" onChange={handleChange}  placeholder=""  />
            </div>
            <div className="form-group col-md-1">
            </div>
                        
            <div className="form-group col-md-5">
            <label htmlFor="inputPassword4">Status</label>
            <br></br>
                
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>

               
            </div>
            </div>
            
            <br></br>
            <div className="form-row" style ={{display:"flex",flexDirection:"row"}}>
            <div className="form-group col-md-5">
                <label htmlFor="inputEmail4">Operator</label>
                <input type="text" className="form-control" name="operator_id" onChange={handleChange}  placeholder="" />
            </div>
            <div className="form-group col-md-1">
            </div>
                        
            <div className="form-group col-md-5">
                <label htmlFor="inputPassword4">Provider</label>
                <input type="text" className="form-control" name="provider_id"  onChange={handleChange}  placeholder=""  />
            </div>
            </div>


            <br></br>
            <br></br>
            <p style={{fontSize: "25px" , fontWeight:"bold",color:"#03A9F4"}}> Configuration</p>

            <div className="form-row" style ={{display:"flex",flexDirection:"row"}}>
            <div className="form-group col-md-11">
                <label htmlFor="inputEmail4">Subscription key </label>
                <input type="text" className="form-control" name="subscriptionkey"  onChange={handleChange} placeholder=""  />
            </div>
            
            </div>
            
            <br></br>
            <div className="form-row" style ={{display:"flex",flexDirection:"row"}}>
            <div className="form-group col-md-3">
                <label htmlFor="inputEmail4">Short code</label>
                <input type="text" className="form-control" name="short_code" onChange={handleChange}  placeholder="" />
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="form-group col-md-3">
                <label htmlFor="inputPassword4">Billing Short codeder</label>
                <input type="text" className="form-control" name="billingSC" onChange={handleChange} placeholder=""  />
            </div>

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <div className="form-group col-md-3">
                <label htmlFor="inputPassword4">Grace days</label>
                <input type="text" className="form-control" name="gracedays" onChange={handleChange} placeholder=""  />
            </div>
            </div>
            
            <br></br>

            <br></br>
            <div className="form-row" style ={{display:"flex",flexDirection:"row"}}>
            <div className="form-group col-md-3">
                <label htmlFor="inputEmail4">Service Code</label>
                <input type="text" className="form-control" name="service_code" onChange={handleChange} placeholder="" />
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="form-group col-md-3">
                <label htmlFor="inputPassword4">Service Campaign</label>
                <input type="text" className="form-control" name="service_code_campaign" onChange={handleChange} placeholder="" />
            </div>

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <div className="form-group col-md-3">
                <label htmlFor="inputPassword4">Pin Flow</label>
                <input type="text" className="form-control" name="pinflow" onChange={handleChange} placeholder=""  />
            </div>
            </div>
            
            
        </div>


        

        <div className="col-3" style={{marginLeft:"0rem"}}>
                <p style={{fontSize: "25px" , fontWeight:"bold",color:"#03A9F4"}}> Package</p>
                <div className="form-row" >
            <div className="form-group col-md-12">
                <label htmlFor="inputEmail4">Type</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="" />
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Price</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Recurrence Days</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
            </div>
        </div>


    </div>


    </div>
        
       
      </form>


                                       
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default AddClient;