import TextField from "@mui/material/TextField";


interface TextFieldProps {
    label?: string;
    placeHolder?: string;
    type?: string;
    value?: string;
    required?: boolean;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    className?: string;
}

const FormTextField: React.FC<TextFieldProps> = ({
    label,
    placeHolder = "Enter text",
    type = "text",
    value,
    onChange,
    onBlur,
    required = false,
    error = false,
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
                onBlur={onBlur}
                fullWidth
                error={error}
                InputLabelProps={{ shrink: true }}
                value={value !== undefined ? value : undefined}
                className={` border border-gray-600 rounded-sm  bg-transparent placeholder:text-gray-400 ${className}`}
            ></TextField>
            {label && <label key={label}>{label}</label>}

        </div>
    );
};

export default FormTextField