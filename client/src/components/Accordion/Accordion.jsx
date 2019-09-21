import React from "react";
import { NavLink } from "react-router-dom";

export default function Accordion({accordionWrapperClass , cardClass, cardHeaderClass, cardBodyClass, linkClass}){
    return (
        <div className={[`accordion w-100 ${accordionWrapperClass}`]} id="accordion">
            {data.map((item, i) => {
                return (
                    <div className={`card m-1 ${cardClass}`} id={`card-${i}`}>
                        <div className={`card-header d-flex justify-content-between ${cardHeaderClass}`} id={`heading-${i}`}>
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-plus p-1 mr-3" data-toggle="collapse" data-target={`#collapse-${i}`} aria-expanded="true" aria-controls={`collapse-${i}`}></i> 
                                <h5>{item.cardHeader}</h5>
                            </div>
                            <div class="d-flex justify-content-start align-items-center text-body">
                                <NavLink class={[`p-0 m-0 ${linkClass}`]} to={item.linkRoute} >{item.linkText}</NavLink>
                            </div>
                        </div>
                        <div id={`collapse-${i}`} class="collapse" aria-labelledby={`heading-${i}`} data-parent="#accordion">
                            <div className={`card-body ${cardBodyClass}`}>
                                {item.cardBodyText}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}