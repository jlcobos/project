import React from "react";

export default function AuthForm({inputs, buttonText}){
    return (
        <form className="my-3">
            <div className="d-flex justify-content-between p-1">
                <h3>Sign Up</h3>
                <p>Login</p>
            </div>
            {inputs.map((input, i) => {
                <div className="form-group">
                    <label for={input.id}>{input.label}</label>
                    <input type={input.type} className="form-control" id={input.id} aria-describedby={input.ariaDescribeBody} placeholder={input.email}/>
                </div>
            })}
            <button type="submit" className="btn btn-primary mb-1">{buttonText}</button>
            <p className="m-0 p-1">Already have an account?  <a href="#">Login</a></p>
        </form>
    );
}