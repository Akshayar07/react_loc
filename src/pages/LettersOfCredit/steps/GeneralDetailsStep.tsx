// import Switch from "@mui/material/Switch";
// import SegmentedButtons from "../components/SegmentedButtons";
// import CustomDropDown from "../components/CustomDropDown";
// import FormTextField from "../components/FormTextField";
// import GridCheckBoxGroup from "../components/GridCheckBoxGroup";
// import GridRadioButton from "../components/GridRadioButton";
// import { confirmationInstructionOption } from "../constants/ConfirmationInstructionOption";
// import { featureLcOptions } from "../constants/FeatureLcOptions";
// import { formTypeoptions } from "../constants/FormTypeoptions";
// import { LcType } from "../constants/LcTypeOption";

// type Props = {
//     formData: any
//     setFormData: any
//     errors: any
//     setErrors: any
// };
// export default function GeneralDetails({ formData, setFormData, errors, setErrors }: Props) {
//     return (
//         <div className="bg-gray-100 p-10 mt-8">
//             <h1 className="text-lg font-medium  mb-5">General Details</h1>
//             <h1 className="text-sm font-medium mb-5">Request Type</h1>
//             <div className="flex flex-row items-center gap-3 mb-5">
//                 <Switch
//                     checked={formData.requestType}
//                     onChange={(e) => setFormData({ ...formData, requestType: e.target.checked })}
//                 ></Switch>
//                 <p className="text-sm ">Do you want to preview a Draft LC?</p>
//             </div>
//             <h1 className="text-sm font-medium mb-5">Create Form</h1>
//             <SegmentedButtons
//                 options={formTypeoptions}
//                 onClick={(selected) => setFormData({ ...formData, createFormType: selected })}
//             />
//             <div className="grid grid-cols-2 gap-10 mb-10">
//                 <div>
//                     <FormTextField
//                         type="date"
//                         onBlur={(e) => ValidateField("expiryDate", e.target.value)}
//                         error={!!errors.expiryDate}
//                         placeHolder="Expiry Date"
//                         value={formData.expiryDate}
//                         onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
//                     />
//                     {errors.expiryDate && <span className="text-red-500">{`Error: ${errors.expiryDate}`}</span>}
//                 </div>
//                 <div>
//                     <FormTextField
//                         type="text"
//                         onBlur={(e) => ValidateField("placeOfExpiry", e.target.value)}
//                         error={!!errors.placeOfExpiry}
//                         placeHolder="Place of Expiry"
//                         value={formData.placeOfExpiry}
//                         onChange={(e) => setFormData({ ...formData, placeOfExpiry: e.target.value })}
//                     />
//                     {errors.placeOfExpiry && <span className="text-red-500">{`Error: ${errors.placeOfExpiry}`}</span>}
//                 </div>
//                 <div>
//                     <div>
//                         <CustomDropDown
//                             label="LC Type"
//                             value={formData.lcType}
//                             error={!!errors.lcType}
//                             onChange={(e) => setFormData({ ...formData, lcType: e.target.value })}
//                             onBlur={(e) => ValidateField("lcType", e.target.value)} options={LcType}
//                         ></CustomDropDown>
//                     </div>
//                     {errors.lcType && <span className="text-red-500">{`Error: ${errors.lcType}`}</span>}
//                 </div>
//             </div>
//             <h1 className="text-sm font-medium mb-5 ">Feature of LC</h1>
//             {/* Feature LC checkbox */}
//             <GridCheckBoxGroup
//                 options={featureLcOptions}
//                 checked={formData.featureOfLc}
//                 onChange={(selected) => setFormData({ ...formData, featureOfLc: selected })}
//             />
//             <h1 className="text-sm font-medium mb-5">Confirmation Instructions</h1>
//             {/* Confirmation Instructions Radio button */}
//             <GridRadioButton
//                 options={confirmationInstructionOption}
//                 defaultValue="Confirm"
//                 onChange={(selected) => setFormData({ ...formData, confirmationInstruction: selected })}
//             />
//             {/* References */}
//             <h1 className="text-sm font-medium mb-5">References</h1>
//             <div className="grid grid-cols-2 gap-10">
//                 <FormTextField
//                     type="text"
//                     placeHolder="Beneficiary Reference"
//                     value={formData.BeneficiaryReference}
//                     onChange={(e) => setFormData({ ...formData, BeneficiaryReference: e.target.value })}
//                 />
//                 <FormTextField
//                     type="text"
//                     placeHolder="Customer Reference"
//                     value={formData.CustomerReference}
//                     onChange={(e) => setFormData({ ...formData, CustomerReference: e.target.value })}
//                 />
//                 <FormTextField
//                     type="text"
//                     placeHolder="Purchase Order(s)"
//                     value={formData.PurchaseOrder}
//                     onChange={(e) => setFormData({ ...formData, PurchaseOrder: e.target.value })}
//                 />
//             </div>
//         </div>
//     );
// }