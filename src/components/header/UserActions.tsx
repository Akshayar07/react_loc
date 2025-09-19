import { FaStar, FaSitemap, FaExclamationCircle, FaAngleDown } from "react-icons/fa"

export default function UserActions() {
    return (
        <div className="flex gap-4 flex-row item-center justify-center">
            <div className="flex flex-col items-center">
                <FaSitemap className="text-gray-500"></FaSitemap>
                <p className="text-[8px]  text-gray-700" >Sitemap</p>
            </div>
            <div className="flex flex-col items-center">
                <FaStar className="text-red-500" ></FaStar>
                <p className="text-[8px] text-gray-700">Favourites</p>
            </div>
            <div className="flex flex-col items-center">
                <FaExclamationCircle className="text-gray-500"></FaExclamationCircle>
                <p className=" text-[8px] text-gray-700">Help</p>
            </div>
            <div className="flex flex-col items-center">
                <FaStar className="text-red-500"></FaStar>
                <p className="text-[8px] text-gray-700">Emergency</p>
            </div>
            <div className="flex flex-rows items-center">
                <div className="flex bg-gray-400 rounded-full w-7 h-7 items-center justify-center text-white  text-sm font-medium">
                    AR
                </div>
                <div>
                    <FaAngleDown className=" text-gray-500" ></FaAngleDown>
                </div>
            </div>
        </div>
    )
}