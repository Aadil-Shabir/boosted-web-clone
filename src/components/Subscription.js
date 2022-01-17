import Clientsdata from '../pages/Clientsdata';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Campaignsdata from '../pages/Campaignsdata';
const Subscription = () => {
  return (
    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item"><Link to="#" class="nav-link text-dark font-italic bg-light "><i class="bi bi-list-ul"></i> &nbsp; &nbsp; &nbsp; All Subscribers</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" >
                <div  style={{background:"white",height:"10%",width:"98%",display:"flex",flexDirection:"row"}}>    
                    <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem"}}> Subscribers</p>
                    <div style={{fontSize: "25px" ,marginTop:"1rem", fontWeight:"bold",float:"right" ,marginLeft:"75%" }}>  
                    </div>
                </div>
                <div  style={{background:"white",marginTop:"2%",marginLeft:"1%" ,height:"45%",width:"96%",display:"flex",flexDirection:"row"}}>
                    <div style={{marginLeft:"3%" ,marginTop:"2%"}}> 
                    <Campaignsdata></Campaignsdata>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Subscription;