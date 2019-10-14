import { supplierForm } from "./SupplierForm";
import { rfpForm } from "./RFPForm";
import { loginForm } from "./LoginForm";
import { signupForm } from "./SignupForm";
import { supplierSearchForm } from "./SupplierSearchForm";
import { reducer } from "./FormMethods";

const supplierFormData = supplierForm.reduce(reducer, {});
const rfpFormData = rfpForm.reduce(reducer, {});
const supplierSearchFormData = supplierSearchForm.reduce(reducer, {});
const loginFormData = loginForm.reduce(reducer, {});
const signupFormData = signupForm.reduce(reducer, {});
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
export const loginFormAndData = {
    loginForm,
    loginFormData,
}
export const signupFormAndData = {
    signupForm,
    signupFormData,
}