import { FaBars } from "react-icons/fa"
import UserActions from "./UserActions"


export default function LogoSection() {
    return (
        <div className=" flex flex-row justify-between p-2 " >
            <div className="flex flex-row gap-5 ">
                <button>
                    <FaBars size={16} color="gray"></FaBars>
                </button>
                <img className="w-[120px] h-[40px]" src="src/assets/fyn_logo.jpg" />
            </div>
            <UserActions />

        </div>
    )
}