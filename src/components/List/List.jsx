import React from "react";

export default function List({items, itemsClass, wrapperClass, headerClass, header, }){
    return (
        <div className={`${wrapperClass} w-100`}>
            {/* <div className={`card-header ${headerClass}`}>{header}</div> */}
            <ul className="list-group">
                {items.map((item, i) => {
                    return <li key={i} className={`list-group-item list my-2 ${itemsClass}`}>{item}</li>;
                })}
            </ul>
        </div>
    );
}