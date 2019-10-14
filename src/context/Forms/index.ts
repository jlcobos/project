import { supplierForm } from "./SupplierForm";
import { rfpForm } from "./RFPForm";
import { loginAndSignupForm } from "./LoginAndSignupForm";
import { supplierSearchForm } from "./SupplierSearchForm";
import { reducer } from "./FormMethods";

const supplierFormData = supplierForm.reduce(reducer, {});
const rfpFormData = rfpForm.reduce(reducer, {});
const supplierSearchFormData = supplierSearchForm.reduce(reducer, {});
const loginAndSignupFormData = loginAndSignupForm.reduce(reducer, {});
// export const form = supplierForm.reduce(reducer, {});

export const supplierFormAndData = {
    supplierForm,
    supplierFormData,
}
export const rfpFormAndData = {
    rfpForm,
    rfpFormData,
}
export const supplierSearchFormAndData = {
    supplierSearchForm,
    supplierSearchFormData,
}
export const loginAndSignupFormAndData = {
    loginAndSignupForm,
    loginAndSignupFormData,
}