import React from "react";

export default function Modal(props){
    return (
        <div>
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modal">
                {props.modalOpenText}
            </button>

            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-black-50" id="exampleModalLabel">{props.headerText}</h5>
                        </div>
                        <div class="modal-body">
                            {props.children}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}