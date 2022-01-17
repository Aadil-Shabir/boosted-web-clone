import axios from 'axios';
import React, {useContext, useState} from 'react';

import OperatorContext from '../store/OperatorStore';

const AddOperator = () => {
    const [nameValue, setNameValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [imageValue, setImageValue] = useState('');

    const opCtx = useContext(OperatorContext);

    const createOperator = () => {
        axios.post('http://127.0.0.1:8000/api/admin/operator', {
            name: nameValue,
            code: codeValue,
            country: countryValue,
            image: imageValue
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="row" data-keyboard="false" data-backdrop="static">
           <div style={{ backgroundColor:"#4527A0", height:"4rem",width:"30rem",marginLeft:"0.8rem",marginTop:"-1rem"}}> 
           
           <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem" , color:"white"}}> Operators</p>

            </div>  

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Name </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setNameValue(e.target.value)} />
                </div>
            </div>


            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Code  </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setCodeValue(e.target.value)} />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Country </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setCountryValue(e.target.value)} />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Image </label>
                </div>

            <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div>

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setImageValue(e.target.value)} />
                </div>

            </div>

            <br></br>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem"}}>
                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>       
                
                </div>

               <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
               <button type="button" class="btn btn-outline" onClick={opCtx.closeModal}> &nbsp;Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-success" onClick={createOperator()}> &nbsp;Create</button>
                </div>

            </div>
        </div>
    )
}

export default AddOperator;