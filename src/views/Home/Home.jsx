import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import Row from "../../components/Layout/Row";

export default class Home extends Component {
  state = {
    placeholder: "",
  }

  render() {
    const tierLinks = [
      {tier: "1", text: "Tier I", speed: "< 125MPH"},
      {tier: "2", text: "Tier II", speed: "125MPH - 150MPH"},
      {tier: "3", text: "Tier III", speed: "> 150MPH"}
    ]
    return (
      <Fragment>
        {tierLinks.map(({tier, text, speed}, index) => {
          return (
            <Row key={index}>
              <NavLink to={`/components/tier/${tier}`} className="w-100 my-3 px-3">
                <Button variant="primary" className="w-100">
                  <p style={{fontSize: 24}} >{text}</p>
                  <p className="text-light">{speed}</p>
                </Button>
              </NavLink>
            </Row>
            )
          }
        )}
      </Fragment>
    )
  }
}