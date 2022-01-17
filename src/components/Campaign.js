import Clientsdata from '../pages/Clientsdata';
import AddCampaign from '../pages/AddCampaign';
import Campaignsdata from '../pages/Campaignsdata';
import React, { useState, useEffect } from 'react'

import {AgGridColumn, AgGridReact} from 'ag-grid-react';


import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
const Campaign = () => {

const [overlay, setOverlay] = useState(false)
const [rowData, setRowData] = useState([]);
    
const [loading, setLoading] = useState(false)

useEffect(() => {
    try {
        setLoading(true)
        axios.get('http://dev.digitalizehub.com/api/admin/campaigns')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.all_campaign)
        })
    } catch (error) {
        console.log(error)
    }
}, [])


return (
    

    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item"><Link to="/Campaign" class="nav-link text-dark font-italic bg-light "><i class="bi bi-list-ul"></i> &nbsp; &nbsp; &nbsp; All Campaigns</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" >
                <div  style={{background:"white",height:"10%",width:"98%",display:"flex",flexDirection:"row"}}>    
                    <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem"}}> Campaign</p>
                    <div style={{fontSize: "25px" ,marginTop:"1rem", fontWeight:"bold",float:"right" ,marginLeft:"75%" }}>  
                    <button onClick={()=> setOverlay(true)} class="btn btn-default"> <i class="bi bi-plus-square"></i>&nbsp;Add new Campaign</button></div>
                </div>
                <div  style={{background:"white",marginTop:"2%",marginLeft:"1%" ,height:"45%",width:"96%",display:"flex",flexDirection:"row"}}>
                    <div style={{marginLeft:"3%" ,marginTop:"2%"}}> 
                   

                    <div className="ag-theme-alpine" style={{height: 300, width: 950}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="operator" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="company" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="conversion" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="payout" sortable={true} filter={true}></AgGridColumn>
               
               
           </AgGridReact>
       </div>

                    </div>
                </div>
            </div>
        </div>
        {overlay ? <div className="overlay" onClick={() => setOverlay(false)}>
                <div className="overlay-sidebar">
                    <AddCampaign></AddCampaign>
                </div>
            </div> : ''}
    </div>

  );
};

export default Campaign;