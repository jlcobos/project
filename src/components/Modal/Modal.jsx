import React from "react";

export default function Modal(props){
    return (
        <div>
            <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-black-50" id="exampleModalLabel">{props.headerText}</h5>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}