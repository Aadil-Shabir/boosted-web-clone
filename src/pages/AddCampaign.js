import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const AddCampaign = () =>{
    return (
        <div className="row">
           <div style={{ backgroundColor:"#4527A0", height:"4rem",width:"30rem",marginLeft:"0.8rem",marginTop:"-1rem"}}> 
           
           <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem" , color:"white"}}> Campaign</p>

            </div>  

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Name </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                </div>
            </div>


            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Code  </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Country </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Image </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                </div>

            </div>

            <br></br>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>       
                
                </div>

               <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
               <button type="button" class="btn btn-outline"> &nbsp;Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-success"> &nbsp;Create</button>
                </div>

            </div>

        
        

        </div>

        
    )

}

export default AddCampaign;