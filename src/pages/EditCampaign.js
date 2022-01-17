import ClientForm from "./ClientForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const EditCampaign = () => {
  return (
    <div className="clientbg">
      <div className="row">
        <div class="col-2">
          <div class="vertical-nav bg-white" id="sidebar">
            <ul class="nav flex-column bg-white mb-0">
              <li class="nav-item">
                <Link to="/campaign" class="nav-link text-dark font-italic  ">
                  <i class="bi bi-list-ul"></i> &nbsp; &nbsp; &nbsp; All
                  Campaign
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-10">
          <div
            style={{
              background: "white",
              height: "7rem",
              width: "85rem",
              marginLeft: "0.4rem",
            }}
          >
            <p>
              <Link
                style={{ marginLeft: "2rem", color: "gray" }}
                to="/campaign" 
              >
                {" "}
                Campaign{" "}
              </Link>{" "}
              &nbsp; / &nbsp; 1
            </p>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                }}
              >
                {" "}
                <i class="bi bi-arrow-left"></i> &nbsp;&nbsp;NTH_ZAINIRAQ -
                ADSTART
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#1E75B7",
              height: "5rem",
              width: "84.6rem",
              marginLeft: "0.4rem",
            }}
          >
            <p
              style={{
                fontSize: "25px",
                fontWeight: "normal",
                marginLeft: "2rem",
                color: "white",
              }}
            >
              {" "}
              Campaign ID. 91bf7440-3437-4ed7-b0db-923f240f8a26
            </p>

            <div style={{ display: "flex", flexDirection: "row" }}></div>
          </div>

          <div
            style={{
              background: "white",
              height: "5rem",
              width: "84.6rem",
              marginLeft: "0.4rem",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "#B0B0B0",
              }}
            >
              Operator
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Company
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Payout
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Conversion
            </p>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "black",
              }}
            >
              Random &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Rnadom
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1.1
            </p>

            <div style={{ display: "flex", flexDirection: "row" }}></div>
          </div>

          <div
            className="row"
            style={{
              background: "white",
              marginTop: "2%",
              marginLeft: "1%",
              marginLeft: "0.4rem",
              height: "40rem",
              width: "84rem",
            
            }}
          >
            <div style={{ marginLeft: "3%", marginTop: "2%" }}>
              <div
                className="form-row"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="form-group col-md-4">
                  <label htmlFor="inputEmail4">Payout</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-1"></div>

                <div className="form-group col-md-4">
                  <label htmlFor="inputEmail4">Conversion </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-1"></div>
                <div className="form-group col-md-2">
                  <br></br>
                  <button type="button" class="btn btn-success">
                    {" "}
                    &nbsp;Update
                  </button>
                </div>
              </div>
              <br></br>
              <div className="container">
                            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
</div>
            </div>

 
          </div>
         
        </div>

      </div>
    </div>
  );
};

export default EditCampaign;
