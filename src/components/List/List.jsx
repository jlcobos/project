import React from "react";

export default function List({items, wrapperClass, headerClass, header}){
    return (
        <div className={`card ${wrapperClass}`}>
            <div className={`card-header ${headerClass}`}>{header}</div>
            <ul className="list-group list-group-flush">
                {items.map((item, i) => {
                    return <li key={i} className="list-group-item">{item.text}</li>;
                })}
            </ul>
        </div>
    );
}