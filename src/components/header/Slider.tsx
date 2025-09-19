
interface SliderProps { value: number , className?: string }


const Slider: React.FC<SliderProps> = ({ value, className }) => {
    return (
        <div className={`${className}`}>
            <div>{value.toFixed(0)}%</div>
            <div className="w-full h-1 bg-gray-300 ">
                <div style={{ width: `${value}%` }} className="h-full bg-blue-500"></div>
            </div>
        </div>
    )

}
export default Slider