
type Step = {
    id: number;
    value: string
    label: string;
};

interface StepperProps {
    steps: Step[];
    value?: number
    onChange: (stepIndex: number) => void;
}



const CustomStepper: React.FC<StepperProps> = ({ steps, value, onChange }) => {
    // const lastStep = steps.length
    return (
        <ul>
            {steps.map((step, index) => (
                <li
                    key={step.value}
                    value={step.value}
                    onClick={() => onChange(index)}
                    className={`py-6 px-5 ${value === index ? "bg-gray-300" : ""}`}>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col items-center ">
                            <div className="  w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center" >{step.id}</div>
                            {/* {lastStep == step.id || < div className="mt-2 mb-2 size-[0.9%] h-8 bg-gray-400 "></div>} */}

                        </div>
                        <div>{step.label}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CustomStepper


