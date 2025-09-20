import { useState } from "react";

type Option =
    {
        label: string;
        value: string;
    }

interface SegmentedButtonsProps {
    options: Option[];
    onClick?: (selected: string) => void
}


const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({ options, onClick }) => {
    const [selected, setSelected] = useState('');
    function handleSelection(value: string) {
        event?.preventDefault();
        setSelected(value);
        onClick?.(value);
    }
    return (
        <div className="flex flex-row gap-5 mb-5">
            {
                options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => handleSelection(opt.value)}
                        className={`border px-8 py-1 rounded-full text-sm  ${selected === opt.value ? "bg-blue-700 text-white" : ""}`} >{opt.label}</button>
                ))
            }
        </div>
    );
} //SegmentedButtons
export default SegmentedButtons