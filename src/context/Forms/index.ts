import { supplierForm } from "./SupplierForm"
import { rfpForm } from "./RFPForm"
import { reducer } from "./FormMethods"

const supplierFormData = supplierForm.reduce(reducer, {});
const rfpFormData = rfpForm.reduce(reducer, {});
// export const form = supplierForm.reduce(reducer, {});

export const supplierFromAndData = {
    supplierForm,
    supplierFormData,
}
export const rfpFromAndData = {
    rfpForm,
    rfpFormData,
}