import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.PureComponent {
	constructor(props){
		super(props);
		this.state={

		}
	}
	
	render() {
		return (
			<div class="column1">
				<div class="sidenav">
					<div className="row">
						<div className="nav-col">
							<Link className={window.location.pathname === "/dashboard" ? "nav-item-active" : "nav-item"} to="/dashboard">Dashboard</Link>
						</div>
						<div className="nav-col">
							<Link className={window.location.pathname === "/team" ? "nav-item-active" : "nav-item"}  to="/team">Team</Link>
						</div>

						<div className="nav-col">
							<Link className={window.location.pathname === "/about" ? "nav-item-active" : "nav-item"}  to="/about">About</Link>
						</div>

						<div className="nav-col">
							<Link className="nav-item" to="/" onClick={()=>localStorage.clear()} >Q</Link>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;