import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type Option = {
    label: string;
    value: string;
};

interface CustomDropDownProps {
    label?: string;
    value?: string;
    options: Option[];
    defaultValue?: string;
    error?: boolean;
    onChange?: (e: SelectChangeEvent<string>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomDropDown: React.FC<CustomDropDownProps> = ({
    options,
    onChange,
    defaultValue = "",
    error,
    onBlur,
}) => {
    const [selected, setSelected] = useState(defaultValue);

    const handleChange = (e: SelectChangeEvent<string>) => {
        setSelected(e.target.value);
        onChange?.(e);
    };

    return (
        <Select
            value={selected}
            onChange={handleChange}
            onBlur={onBlur}
            error={error}
            fullWidth
            displayEmpty
        >
            {options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CustomDropDown;
