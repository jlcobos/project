import React from "react";
// import { NavLink } from "react-router-dom";
// import Card from "../../components/Card";
// import Col from "../../components/Layout/Col";
// import { Context } from "../../context/context";

export default class ComponentRegulationList extends React.Component {
    render(){
        const { params } = this.props.match;
        return (
            // <Context.Consumer>
            //     {({data}) => {
            //         const { requirements } = data[`tier${params.tier}`].requirements.components.find(c => c.name === params.component);
            //         return requirements.general.map((req, i) => {
            //             return (
            //                 <Col>
            //                     <NavLink key={i} to={`/tier/${params.tier}/components/${params.component}/${req.name}`}>
            //                         <Card withTitle title={req.displayName} />
            //                     </NavLink>
            //                 </Col>
            //             )
            //         })
            //     }}
            // </Context.Consumer>
            <p>text</p>
        )
    }
}