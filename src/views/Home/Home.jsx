import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Col from "../../components/Layout/Col";

export default class Home extends Component {
  state = {
    placeholder: "",
  }
tierLinks = [
  {tier: "1", text: "Tier I", speed: "< 125MPH"},
  {tier: "2", text: "Tier II", speed: "125MPH - 150MPH"},
  {tier: "3", text: "Tier III", speed: "> 150MPH"}
]

  render(){
    return (
      this.tierLinks.map(tier => {
        return (
          <Col key={tier.tier} colClass="col-md-4 d-flex justify-content-center align-items-center">
            <Card cardClass="text-center square200 transparent-secondary-9 mb-5" withTitle titleText={tier.text} />        
          </Col>
        )
      })
    )
  }
}