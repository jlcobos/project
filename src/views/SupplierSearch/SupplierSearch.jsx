import React, {Fragment} from "react";
import Form from "../../components/Form/Form";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
import { Context } from "../../context/context";

function SupplierSearch() {

    const searchItems = [1,2,3];
    return(
        <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1">
            <Context.Consumer>
            {({forms: {supplierSearchForm}, supplierSearchResults,...rest}) => {
                    return (
                        <Fragment>
                            <Row>
                                <Form form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                            </Row>
                            <Row>
                                {supplierSearchResults ? 
                                    <List items={searchItems.map(item => ({node: <SearchItem item={item} />}))} itemClass={"my-2"}/>
                                    :
                                    null
                                }
                            </Row>
                        </Fragment>
                    ); 
                }}
            </Context.Consumer>
        </Col>
    );
}

export default SupplierSearch

function SearchItem(item) {
    return (
        <div>
            <div className="row">
            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">Company Name</h5>
                    <p className="mr-1">Products: </p>
                </div>
            </div>

            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">Diversity and Ownership</h5>
                    <p className="mr-1">Diversity: </p>
                    <p className="mr-1">Ownership: </p>
                </div>
            </div>

            <button className="col-2 btn btn-link">Portfolio</button>
            <button className="col-2 btn btn-link">Save to Favorites</button>
            <button className="col-2 btn btn-link">Invite To Bid</button>

            </div>
        </div>
    )
}