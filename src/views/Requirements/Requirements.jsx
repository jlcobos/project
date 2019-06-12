import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class  extends Component {

    state = {
        tier: this.props.match.params.tier,
        component: this.props.match.params.component,
        requirements: this.props.match.params.requirements,
    }

    render(){
        const { tier, component, requirements } = this.state;
        return(
            <Row>
                <Col>                
                    <p className="text-white text-capitalize">{`Tier ${tier} - ${component} - ${requirements.split("-").join(" ")} requirements page`}</p>
                    <p>
                        Sed id interdum <a style={{fontSize: 20}} href="https://google.com">A link</a> Vivamus eu pretium ante. Fusce finibus, turpis vitae facilisis vehicula, 
                        eros nisi iaculis ante, aliquet finibus risus nunc quis dui. In erat sapien, dignissim quis 
                        lectus ac, dignissim iaculis felis. Pellentesque fringilla faucibus mi. Mauris semper, dui vel 
                        venenatis molestie, nisi velit dignissim massa, et finibus elit ligula non orci. Cras maximus 
                        id lacus at maximus. Mauris tempus nunc eu ligula mattis, a congue tellus iaculis. Proin sit 
                        amet gravida nisl.
                    </p>
                    <p>
                        Sed id interdum nulla. Vivamus eu pretium ante. Fusce finibus, turpis vitae facilisis vehicula, 
                        eros nisi iaculis ante, <a style={{fontSize: 20}} href="https://google.com">Another link</a> finibus risus nunc quis dui. In erat sapien, dignissim quis 
                        lectus ac, dignissim iaculis felis. Pellentesque fringilla faucibus mi. Mauris semper, dui vel 
                        venenatis molestie, nisi velit dignissim massa, et finibus elit ligula non orci. Cras maximus 
                        id lacus at maximus. Mauris tempus nunc eu ligula mattis, a congue tellus iaculis. Proin sit 
                        amet gravida nisl.
                    </p>
                </Col>
            </Row>
        );
    }
}