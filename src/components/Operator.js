import React, { useState, useEffect, useContext } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios'
import $ from 'jquery'; 

import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

import AddOperator from '../pages/AddOperator';
import OperatorContext from '../store/OperatorStore';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
const Operator = () => {
    const opCtx = useContext(OperatorContext)

    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(false)



useEffect(() => {
    try {
        setLoading(true)
        axios.get('https://dev.digitalizehub.com/api/admin/operators')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.all_operators)
        })
    } catch (error) {
        console.log(error)
    }
}, [])

return (
    

    <div>
    {

    loading ? <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> :

    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item"><Link to="/Operator" class="nav-link text-dark font-italic bg-light "><i class="bi bi-list-ul"></i> &nbsp; &nbsp; &nbsp; All Operators</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" >
                <div  style={{background:"white",height:"10%",width:"98%",display:"flex",flexDirection:"row"}}>    
                    <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem"}}> Operator</p>
                    <div style={{fontSize: "25px" ,marginTop:"1rem", fontWeight:"bold",float:"right" ,marginLeft:"75%" }}>  
                    <button onClick={opCtx.openModal} class="btn btn-default"> <i class="bi bi-plus-square"></i>&nbsp;Add new Operator</button></div>
                </div>
                <div  style={{background:"white",marginTop:"2%",marginLeft:"1%" ,height:"45%",width:"96%",display:"flex",flexDirection:"row"}}>
                    <div style={{marginLeft:"3%" ,marginTop:"2%"}}> 
                    <div className="ag-theme-alpine" style={{height: 300, width: 850}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="country" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="code" sortable={true} filter={true}></AgGridColumn>
               
           </AgGridReact>
       </div>

                    </div>
                </div>
            </div>
        </div>
        {opCtx.overlay ? (<div className="overlay">
                <div className="overlay-sidebar" id="myModal2">
                    <AddOperator></AddOperator>
                </div>
            </div>) : ''}
    </div>
}
</div>
  );
};

export default Operator;