"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Variant;
(function (Variant) {
    Variant["Primary"] = "primary";
    Variant["Secondary"] = "secondary";
    Variant["Success"] = "success";
    Variant["Warning"] = "warning";
    Variant["Danger"] = "danger";
    Variant["Info"] = "info";
    Variant["Light"] = "light";
    Variant["Dark"] = "dark";
    Variant["Link"] = "link";
})(Variant || (Variant = {}));
;
function Button(_a) {
    var variant = _a.string, text = _a.string, style = _a.string;
    return (<Button_1.Button variant={variant} style={style}>{text}</Button_1.Button>);
}
exports["default"] = Button;
