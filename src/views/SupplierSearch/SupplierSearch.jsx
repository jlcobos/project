import React, {useState, useContext, Fragment} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/context";
import Form from "../../components/Form/Form";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import Card from "../../components/Card"
import List from "../../components/List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//TODO: add vetted supplier as search criteria. 
function SupplierSearch() {

    const [suppliers, setSuppliers] = useState([]);
    const {organization, currentUser, forms: {supplierSearchForm}, supplierSearchResults, createDraftRFP,...rest} = useContext(Context);

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

    function newRfpButton(createDraftRFP, organization, currentUser){
        if (suppliers.length > 0) {
            return (
                <button 
                    className="btn btn-info w-100 mb-3" 
                    onClick={() => createDraftRFP({suppliers: suppliers.map(s => s), organizationId: organization.id, userId: currentUser.uid})}
                >
                    <NavLink to={"/initialize-rfp"}>Create Draft RFP</NavLink>
                </button>
            )
        }
    }

    function renderDraftRFPSuppliers(){
        return (
            <div className="card w-100 ml-2 formBg flex-grow" style={{marginTop: 15}}>
                <div className="card-header text-center"><h3>Draft RFP Suppliers</h3></div>
                <ul className="list-group list-group-flush h-100">
                    {suppliers.map(s => {
                        return (
                            <li key={s.id} className="list-group-item d-flex justify-content-between formBg shadow my-1">
                                <div>{s.name}</div>
                                <button className="btn btn-link p-0" onClick={() => removeSupplier(s.id)}><span class="badge badge-danger">x</span></button>
                            </li>
                            )
                        })
                    }
                </ul>
                <div className="card-footer">
                    {isOrg && newRfpButton(createDraftRFP, organization, currentUser)}
                </div>
            </div>
        )
    }
    const isOrg = Boolean(organization);
    const items = supplierSearchResults ? supplierSearchResults.map(supplier => <SearchItem supplier={supplier} addSupplier={addSupplier} isOrg={isOrg} />) : null;

    return(
        <Fragment>
            <Row rowClass="col-xs-12 col-lg-8 offset-lg-2 mb-2 d-flex flex-nowrap align-items-stretch mx-auto">
                <Form title="Search Suppliers" formWrapperClass="w-100" form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                {suppliers.length > 0 && renderDraftRFPSuppliers()}
            </Row>
            <Row rowClass={"col-12 mx-0"}>
                    {!!supplierSearchResults && supplierSearchResults.length > 0 ? 
                        <List 
                            items={items} 
                            itemClass={"my-2"}
                        />
                        :
                        null
                    }
            </Row>
        </Fragment>
    );
}

export default SupplierSearch

function SearchItem({supplier, addSupplier, isOrg}) {

    return (
        <div>
            <div className="row">
            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">{supplier.name}</h5>
                    <p className="mr-1">{supplier.address.city}, {supplier.address.state_province}</p>
                </div>
            </div>

            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">Diversity and Certifications</h5>
                    {supplier.womanOwned && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Woman Owned"}</small>}
                    {supplier.minorityOwned  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Minority Owned"}</small>}
                    {supplier.veteranOwned  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Veteran Owned"}</small>}
                    {supplier.byAmerica  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"By America"}</small>}
                    {supplier.buyAmerica  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Buy America"}</small>}
                    {supplier.isoCertified  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"ISO Certified"}</small>}
                    {supplier.greenCertified  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Green Certified"}</small>}
                    {supplier.establishedProduct  && <small className="d-block font-italic pl-2"><FontAwesomeIcon className="mr-1" icon="check" />{"Established Product(s)"}</small>}
                </div>
            </div>

            <button className="col-2 btn btn-link">Portfolio</button>
            <button className="col-2 btn btn-link">Save to Favorites</button>
            {isOrg && <button className="col-2 btn btn-link" onClick={() => addSupplier(supplier.name, supplier.id)} >Add To New RFP</button>}

            </div>
        </div>
    )
}