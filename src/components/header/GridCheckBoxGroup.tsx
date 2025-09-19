import { useState } from "react";

type Option =
    {
        label: string;
        value: string;
    }

interface GridCheckBoxGroupProps {
    options: Option[];
    checked?: string[];
    onChange: (selected: string[]) => void;
}


const GridCheckBoxGroup: React.FC<GridCheckBoxGroupProps> = ({ options, onChange }) => {

    const [selected, setSelected] = useState<string[]>([]);

    const onHandleChange = (value: string) => {
        setSelected((prev) => {
            const updated = prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];
            onChange?.(updated);
            return updated;
        })
    }

    return (
        <div className="grid grid-cols-2 mb-5">
            {options.map((opt) => (
                <div key={opt.value} className="flex flex-row gap-5 mb-5">
                    <input
                        type="checkbox"
                        checked={selected.includes(opt.value)}
                        placeholder={opt.label}
                        onChange={() => onHandleChange(opt.value)

                        } />
                    <label className={`${selected.includes(opt.value) ? "font-medium" : ""}`}>{opt.label}</label>
                </div>
            )
            )}
        </div>
    );
}
export default GridCheckBoxGroup