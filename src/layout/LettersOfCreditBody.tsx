import { useState } from "react";
import { tabOptions } from "../constants/TabOption";
import { steps } from "../constants/StepperStep";
import { formTypeoptions } from "../constants/FormTypeoptions";
import { featureLcOptions } from "../constants/FeatureLcOptions";
import { confirmationInstructionOption } from "../constants/ConfirmationInstructionOption";
import { Switch } from "@mui/material";
import Footer from "./Footer";
import FormTextField from "../components/FormTextField";
import GridCheckBoxGroup from "../components/GridCheckBoxGroup";
import GridRadioButton from "../components/GridRadioButton";
import SegmentedButtons from "../components/SegmentedButtons";
import SubmitButton from "../components/SubmitButton";
import CustomTab from "../components/Tab";
import CustomStepper from "../components/WizardForm";
import CustomSlider from "../components/Slider";
import CustomDropDown from "../components/CustomDropDown";
import { LcType } from "../constants/LcTypeOption";

export default function LettersOfCreditBody() {

    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState<FormErrors>({})
    const percent = ((currentStep) / steps.length) * 100;
    const [formData, setFormData] = useState({
        requestType: false,
        expiryDate: "",
        placeOfExpiry: "",
        createFormType: "",
        lcType: "",
        featureOfLc: [] as string[],
        confirmationInstruction: "",
        BeneficiaryReference: "",
        CustomerReference: "",
        PurchaseOrder: "",
    });

    type FormErrors = {
        requiryDate?: string,
        expiryDate?: string,
        placeOfExpiry?: string,
        createFormType?: string,
        lcType?: string,
        featureOfLc?: string[],
        confirmationInstruction?: string,
        BeneficiaryReference?: string,
        CustomerReference?: string,
        PurchaseOrder?: string,
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
        console.log(formData);
        if (!Validation()) return
        setCurrentStep((s) => Math.min(s + 1, steps.length - 1))

    }

    const Validation = () => {

        const min = 5
        const max = 10
        const regex = /^[A-Za-z]+$/;

        const newErrors: FormErrors = {};
        if (!formData.expiryDate.trim()) {
            newErrors.expiryDate = "must enter Expiry Date";
        }
        if (!formData.placeOfExpiry.trim()) {
            newErrors.placeOfExpiry = "must enter Place of Expiry";
        }
        else if (formData.placeOfExpiry.length < min || formData.placeOfExpiry.length > max) {
            newErrors.placeOfExpiry = `Must be between ${min} and ${max} characters`;
        }
        else if (!regex.test(formData.placeOfExpiry)) {
            newErrors.placeOfExpiry = "Only Alphabets are allowed";
        }
        if (!formData.lcType.trim()) {
            newErrors.lcType = "must enter Lc Type";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0

    }


    const ValidateField = (name: keyof typeof formData, value: string | Boolean) => {
        let message = "";

        if (name === "expiryDate" && !String(value).trim()) {
            if (!value) {
                message = "must enter Expiry Date";
            }
        }
        if (name === "placeOfExpiry" && !String(value).trim()) {
            if (!value) {
                message = "must enter Place of Expiry";
            }
        }
        if (name === "lcType" && !String(value).trim()) {
            if (!value) {
                message = "must enter Lc Type";
            }
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: message }))
    }


    return (
        <div className="flex flex-row p-10 gap-10 pb-32 overflow-scroll overscroll-none ">
            {/* Left side */}
            <div className="size-[30%]">
                <h1 className="text-md font-medium text-gray-500 mb-10">Letters of Credit Initiation</h1>
                <CustomTab className="mb-10" options={tabOptions} defaultValue="Sections" onClick={(selected) => console.log(selected)} />
                <CustomSlider className="mb-10" value={percent} />
                <CustomStepper
                    steps={steps}
                    value={currentStep}
                    onChange={setCurrentStep}
                />
            </div>
            {/* Right side */}
            <div className="w-full ">
                <form onSubmit={(e) => onSubmit(e)} >
                    <h1 className="text-2xl font-medium">Letters of Credit</h1>
                    <div className="flex flex-row  justify-end ">
                        <button className="text-blue-600 font-medium" >Save</button>
                    </div>
                    <div >
                        {/* generalDetails */}
                        {steps[currentStep].value === "generalDetails" &&
                            <div className="bg-gray-100 p-10 mt-8">
                                <h1 className="text-lg font-medium  mb-5">General Details</h1>
                                <h1 className="text-sm font-medium mb-5">Request Type</h1>
                                <div className="flex flex-row items-center gap-3 mb-5">
                                    <Switch
                                        checked={formData.requestType}
                                        onChange={(e) => setFormData({ ...formData, requestType: e.target.checked })}
                                    ></Switch>
                                    <p className="text-sm ">Do you want to preview a Draft LC?</p>
                                </div>
                                <h1 className="text-sm font-medium mb-5">Create Form</h1>
                                <SegmentedButtons
                                    options={formTypeoptions}
                                    onClick={(selected) => setFormData({ ...formData, createFormType: selected })}
                                />
                                <div className="grid grid-cols-2 gap-10 mb-10">
                                    <div>
                                        <FormTextField
                                            type="date"
                                            onBlur={(e) => ValidateField("expiryDate", e.target.value)}
                                            error={!!errors.expiryDate}
                                            placeHolder="Expiry Date"
                                            value={formData.expiryDate}
                                            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                        />
                                        {errors.expiryDate && <span className="text-red-500">{`Error: ${errors.expiryDate}`}</span>}
                                    </div>
                                    <div>
                                        <FormTextField
                                            type="text"
                                            onBlur={(e) => ValidateField("placeOfExpiry", e.target.value)}
                                            error={!!errors.placeOfExpiry}
                                            placeHolder="Place of Expiry"
                                            value={formData.placeOfExpiry}
                                            onChange={(e) => setFormData({ ...formData, placeOfExpiry: e.target.value })}
                                        />
                                        {errors.placeOfExpiry && <span className="text-red-500">{`Error: ${errors.placeOfExpiry}`}</span>}
                                    </div>
                                    <div>
                                        <div>
                                            <CustomDropDown
                                                label="LC Type"
                                                value={formData.lcType}
                                                error={!!errors.lcType}
                                                onChange={(e) => setFormData({ ...formData, lcType: e.target.value })}
                                                onBlur={(e) => ValidateField("lcType", e.target.value)} options={LcType}
                                            ></CustomDropDown>
                                        </div>
                                        {errors.lcType && <span className="text-red-500">{`Error: ${errors.lcType}`}</span>}
                                    </div>
                                </div>
                                <h1 className="text-sm font-medium mb-5 ">Feature of LC</h1>
                                {/* Feature LC checkbox */}
                                <GridCheckBoxGroup
                                    options={featureLcOptions}
                                    checked={formData.featureOfLc}
                                    onChange={(selected) => setFormData({ ...formData, featureOfLc: selected })}
                                />
                                <h1 className="text-sm font-medium mb-5">Confirmation Instructions</h1>
                                {/* Confirmation Instructions Radio button */}
                                <GridRadioButton
                                    options={confirmationInstructionOption}
                                    defaultValue="Confirm"
                                    onChange={(selected) => setFormData({ ...formData, confirmationInstruction: selected })}
                                />
                                {/* References */}
                                <h1 className="text-sm font-medium mb-5">References</h1>
                                <div className="grid grid-cols-2 gap-10">
                                    <FormTextField
                                        type="text"
                                        placeHolder="Beneficiary Reference"
                                        value={formData.BeneficiaryReference}
                                        onChange={(e) => setFormData({ ...formData, BeneficiaryReference: e.target.value })}
                                    />
                                    <FormTextField
                                        type="text"
                                        placeHolder="Customer Reference"
                                        value={formData.CustomerReference}
                                        onChange={(e) => setFormData({ ...formData, CustomerReference: e.target.value })}
                                    />
                                    <FormTextField
                                        type="text"
                                        placeHolder="Purchase Order(s)"
                                        value={formData.PurchaseOrder}
                                        onChange={(e) => setFormData({ ...formData, PurchaseOrder: e.target.value })}
                                    />
                                </div>
                            </div>
                        }
                        {steps[currentStep].value === "applicantBeneficiaryDetails" && <h1>Applicant and Beneficiary Details</h1>}
                        {steps[currentStep].value === "bankDetails" && <h1>Bank Details</h1>}
                        {steps[currentStep].value === "amountChargeDetails" && <h1>Amount and Charge Details</h1>}
                        {steps[currentStep].value === "otherDetails" && <h1>Other Details</h1>}
                        {steps[currentStep].value === "paymentDetails" && <h1>Payment Details</h1>}
                        {steps[currentStep].value === "shipmentDetails" && <h1>Shipment Details</h1>}
                        {steps[currentStep].value === "narrativeDetails" && <h1>Narrative Details</h1>}
                        {steps[currentStep].value === "instructionsToBank" && <h1>Instructions to Bank</h1>}
                        {steps[currentStep].value === "marginDetails" && <h1>Margin Details</h1>}
                        {steps[currentStep].value === "standardClause" && <h1>Standard Clause</h1>}
                        {steps[currentStep].value === "attachments" && <h1>Attachments</h1>}
                        {steps[currentStep].value === "preview" && <h1>Preview</h1>}
                    </div>
                    <Footer>
                        <SubmitButton></SubmitButton>
                    </Footer>
                </form>
            </div>
        </div>


    )
}