import React, {Fragment} from "react";
import Form from "../../components/Form/Form";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
import { Context } from "../../context/context";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function SupplierSearch() {

    return(
        <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1">
            <Context.Consumer>
            {({forms: {supplierSearchForm}, supplierSearchResults,...rest}) => {
                const items = supplierSearchResults ? supplierSearchResults.map(supplier => <SearchItem item={supplier} />) : null;
                    return (
                        <Fragment>
                            <Row>
                                <Form form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                            </Row>
                            <Row>
                                {!!supplierSearchResults && supplierSearchResults.length > 0 ? 
                                    <List 
                                        items={items} 
                                        itemClass={"my-2"}
                                    />
                                    :
                                    <p>Search for suppliers</p>
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

function SearchItem({item}) {
console.log(item)
    return (
        <div>
            <div className="row">
            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">{item.name}</h5>
                    <p className="mr-1">{item.address.city}, {item.address.state_province}</p>
                </div>
            </div>

            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">Diversity and Certifications</h5>
                    <p className="mr-1">{!item.womanOwned && "Woman Owned"}</p>
                    <p className="mr-1">{!item.minorityOwned && "Minority Owned"}</p>
                    <p className="mr-1">{!item.veteranOwned && "Veteran Owned"}</p>
                    <p className="mr-1">{!item.byAmerica && "By America"}</p>
                    <p className="mr-1">{!item.buyAmerica && "Buy America"}</p>
                    <p className="mr-1">{!item.isoCertified && "ISO Certified"}</p>
                    <p className="mr-1">{!item.greenCertified && "Green Certified"}</p>
                    <p className="mr-1">{!item.establishedProduct && "Established Products"}</p>
                </div>
            </div>

            <button className="col-2 btn btn-link">Portfolio</button>
            <button className="col-2 btn btn-link">Save to Favorites</button>
            <button className="col-2 btn btn-link">Invite To Bid</button>

            </div>
        </div>
    )
}