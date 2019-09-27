import React from "react";

export default function FlexDiv({flexRow, flexColumn, divClass}){
    let flexClass;
    if (flexRow) flexClass = flexRow
    else if (flexColumn) flexClass = flexColumn
    else flexClass = "flex";
    return <div className={`${flexClass} ${divClass}`}>{children}</div>
}