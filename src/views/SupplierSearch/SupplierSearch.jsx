import React, {useState, Fragment} from "react";
import { Context } from "../../context/context";
import Form from "../../components/Form/Form";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
//TODO: add vetted supplier as search criteria. 
function SupplierSearch() {

    const [newBid, setNewBid] = useState(false);
    const [suppliers, setSuppliers] = useState([]);

    function bidManager(){
        if (!newBid) {
            setNewBid(true);
            setSuppliers([]);
        } else if (newBid) {
            setNewBid(false);
            setSuppliers([]);
        }
    }

    function addSupplier(name, id){
        if (!suppliers.some(s => s.id === id)) {
            suppliers.push({name, id});
            const updatedList = [...suppliers];
            setSuppliers(updatedList);
        } 
    }

    function removeSupplier(id){
        const updatedList = suppliers.filter(s => s.id !== id);
        setSuppliers(updatedList);
    }

    const renderSuppliers = suppliers.map(s => (
        <div key={s.id}>
            <p style={{display: "inline"}}>{s.name}</p>
            <button className="btn btn-danger" onClick={() => removeSupplier(s.id)}>X</button>
        </div>
        )
    )

    return(
        <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1">
            <Context.Consumer>
            {({forms: {supplierSearchForm}, supplierSearchResults, createRFP,...rest}) => {
                const items = supplierSearchResults ? supplierSearchResults.map(supplier => <SearchItem item={supplier} addSupplier={addSupplier} />) : null;
                return (
                    <Fragment>
                            <Row>
                                <BidRequestButton handleOnClick={bidManager} currentState={newBid} />
                            </Row>
                            <Row>
                                <Form form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                            </Row>
                            <Row>
                                {renderSuppliers}
                                {suppliers.length > 0 ? <button className="btn btn-info" onClick={() => createRFP(suppliers.map(s => s.id))}>Create Request For Proposal</button> : null}
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

function SearchItem({item, addSupplier}) {
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
                    <p className="mr-1">{item.womanOwned && "Woman Owned"}</p>
                    <p className="mr-1">{item.minorityOwned && "Minority Owned"}</p>
                    <p className="mr-1">{item.veteranOwned && "Veteran Owned"}</p>
                    <p className="mr-1">{item.byAmerica && "By America"}</p>
                    <p className="mr-1">{item.buyAmerica && "Buy America"}</p>
                    <p className="mr-1">{item.isoCertified && "ISO Certified"}</p>
                    <p className="mr-1">{item.greenCertified && "Green Certified"}</p>
                    <p className="mr-1">{item.establishedProduct && "Established Products"}</p>
                </div>
            </div>

            <button className="col-2 btn btn-link">Portfolio</button>
            <button className="col-2 btn btn-link">Save to Favorites</button>
            <button className="col-2 btn btn-link" onClick={() => addSupplier(item.name, item.id)} >Invite To Bid</button>

            </div>
        </div>
    )
}

function BidRequestButton(props) {
    return (
        <div>
            <button 
                onClick={ e => props.handleOnClick(!props.currentState) }
                className={"btn btn-primary"}
            >
                {props.currentState ? "Cancel" : "New Request for Proposal"}
            </button>
        </div>
        )
    }
    // variant ,handleSubmit, buttonClass, displayName, columns, wrapperClass, disabled, formName, submitType