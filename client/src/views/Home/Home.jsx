import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Col from "../../components/Layout/Col";

export default class Home extends Component {
    state = {
        placeholder: "",
	}
	
	tierLinks = [
		{tierNumber: "1", text: "Tier I", speed: "< 125MPH"},
		// {tierNumber: "2", text: "Tier II", speed: "125MPH - 150MPH"},
		// {tierNumber: "3", text: "Tier III", speed: "> 150MPH"}
	]

    render(){
		return (
			this.tierLinks.map((tier, i) => {
				return (
					<Col key={i} colSize="col-md-4" colClass="d-flex justify-content-center align-items-center">
						<NavLink to={`/tier/${tier.tierNumber}`}>
							<Card 
								cardClass="square200 secondary" 
								textCenter 
								withHeader
								headerType="h4" 
								header={tier.text} 
								withBodyText 
								bodyText="Sample body text" 
							/>        
						</NavLink>
					</Col>
				)
		}))
    }
}