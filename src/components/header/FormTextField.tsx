import TextField from "@mui/material/TextField";


interface TextFieldProps {
    label?: string;
    placeHolder?: string;
    type?: string;
    value?: string;
    required?: boolean;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const FormTextField: React.FC<TextFieldProps> = ({
    label,
    placeHolder = "Enter text",
    type = "text",
    value,
    onChange,
    required = false,
    className = "",
}) => {
    return (
        <div>
            <TextField
                label={placeHolder}
                type={type}
                required={required}
                defaultValue={value === undefined ? "" : undefined}
                onChange={onChange}
                fullWidth
                InputLabelProps={{shrink:true}}
                value={value !== undefined ? value : undefined}
                className={`border border-gray-600 rounded-sm  bg-transparent placeholder:text-gray-400 ${className}`}
                ></TextField>
                {label && <label key={label}>{label}</label>}
            {/* <input
                required={required}
                type={type}
                value={value !== undefined ? value : undefined}
                defaultValue={value === undefined ? "" : undefined}
                onChange={onChange}
                placeholder={required ? `${placeHolder} *` : placeHolder}
                className={`w-full border border-gray-600 rounded-sm h-50 size-[50px] px-2 bg-transparent placeholder:text-gray-400 ${className}`}
            /> */}
        </div>
    );
};

export default FormTextField