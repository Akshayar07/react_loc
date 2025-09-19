import type React from "react";
import { useState } from "react";

type Option = {
    label: string;
    value: string;
}

interface TabProps {
    options: Option[];
    defaultValue?: string
    className?: string
    onClick?: (selected: string) => void
}

const Tab: React.FC<TabProps> = ({ options, onClick, defaultValue, className }) => {
    const [activeTab, setactiveTab] = useState(defaultValue || '');
    function handleSelection(value: string) {
        setactiveTab(value);
        onClick?.(value);
    }

    return (
        <div className={`${className}`} >
            {
                options.map((opt) => (
                    <button 
                        key={opt.value}
                        onClick={() => handleSelection(opt.value)}
                        className={`border w-[100px] ${activeTab === opt.value ? "bg-blue-700 text-white rounded-md " : " rounded-sm"}`} >{opt.label}</button>
                ))
            }
        </div>

    )
}
export default Tab