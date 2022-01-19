import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="navbar-nav">
                    
                    <NavLink className="navbar-brand nav-item  nav-link" activeClassName="selected" to="/" exact={true}> Clients</NavLink>
                    <NavLink className="navbar-brand nav-item  nav-link " activeClassName="selected" to="/operator" exact={true}>  Operators </NavLink>
                    <NavLink className="navbar-brand nav-item  nav-link" activeClassName="selected" to="/campaign" exact={true}>Compaigns</NavLink>
                    <NavLink className="navbar-brand nav-item  nav-link" activeClassName="selected" to="/Subscription"exact={true}>Subscription</NavLink>
                    <NavLink className="navbar-brand nav-item nav-link" activeClassName="selected" to="/Transaction"exact={true}>Transaction</NavLink>
                </div>
            </nav>
        
        </div>
    )
};

export default Header;