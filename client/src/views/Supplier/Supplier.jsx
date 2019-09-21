import React, {Component} from "react";
import { Context } from "../../context/context";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";

export default class Supplier extends Component {
    render(){
        const { params } = this.props.match;
        console.log(params)
        return(
            <Row>
                <Col>
                    <Context.Consumer>
                        { ({data: { [`tier${params.tier}`]: { requirements: { components } } }}) => {
                            const component = components.find(component => component.name === params.component);
                            const supplier = component.suppliers.find(s => s.name === params.supplier);
                            const { displayName, website, fstCompliant, buyUSA, contacts } = supplier;
                            return (
                                <React.Fragment>
                                    <div>
                                        <h2>{displayName}</h2>
                                        <p>Web: {website}</p>
                                        <p>FST Compliant: {fstCompliant}</p>
                                        <p>US Made: {buyUSA}</p>
                                    </div>
                                    <div>
                                        <h3>Contact(s)</h3>
                                        {contacts.map(({name, position, phone, email}) => {
                                            return (
                                                <div key={name}>
                                                    <p>{name} - <em>{position}</em></p>
                                                    <p>Tel: {phone}</p>
                                                    <p>Email: {email}</p>
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </React.Fragment>
                            )
                            }
                        }
                    </Context.Consumer>
                    {/* <p className="text-capitalize">{`${this.state.supplier.split("-").join(" ")} Contact and Portfolio Page`}</p> */}
                </Col>
            </Row>
        );
    }
}