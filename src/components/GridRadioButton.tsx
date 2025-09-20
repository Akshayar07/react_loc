import { useState } from "react";

type Option = {
    label: string;
    value: string;
}

interface GridRadioButtonProps {
    options: Option[];
    defaultValue: string;
    onChange: (selected: string) => void;
}

const GridRadioButton: React.FC<GridRadioButtonProps> = ({ options, defaultValue, onChange }) => {

    const [selected, setSelected] = useState(defaultValue || "");
    function handleChange(value: string) {
        setSelected(value);
        onChange?.(value);
    }

    return (
        <div className="grid grid-cols-2">
            {options.map((opt) => (
                <div key={opt.value} className="flex flex-row gap-5 mb-5">
                    <input
                        type="radio"
                        checked={selected === opt.value}
                        onChange={() => handleChange(opt.value)}
                        placeholder="Confirm" />
                    <label>{opt.label}</label>
                </div>
            ))}
        </div>
    )

}

export default GridRadioButton
