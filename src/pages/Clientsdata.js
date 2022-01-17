import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useHistory } from "react-router-dom";

import axios from 'axios'

import {
  Link
} from "react-router-dom";

 import { useEffect, useState, useRef } from 'react';


const Clientsdata = () => {
    let history = useHistory();
   
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  const [loading, setLoading] = useState(false)


   useEffect(() => {
    try {
        setLoading(true)
        axios.get('https://dev.digitalizehub.com/api/admin/clients')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.clients)
        })
    } catch (error) {
        console.log(error)
    }
}, [])

   const handleRowClick = (e) => {
       console.log(e);
    history.push({pathname: `/EditClient/${e.data.id}`,state: { detail: e.data.id }});
  };
   return (

        <div>
                {
                loading ? <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :



                <div className="ag-theme-alpine" style={{height: 300, width: 950}}>
                    <AgGridReact
                    onRowClicked={handleRowClick}
                        ref={gridRef}
                        
                        rowData={rowData}
                        rowSelection="single">
                            

                        <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="client_token" sortable={true} filter={true} ></AgGridColumn>
                        
                        <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
                        <AgGridColumn field="referrer_link" sortable={true} filter={true}></AgGridColumn>

                    </AgGridReact>
                </div>
            }
                
       </div>

       
  );
};


export default Clientsdata;


