import { FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function PrimaryNavigation() {
    return (
        <nav className="flex flex-row item-center gap-5 p-2 text-xs text-gray-800 font-medium">
            <NavLink to='/'><FaHome size={16} color="gray"></FaHome></NavLink>
            <NavLink to='/'>Administration</NavLink>
            <NavLink to='/'>Account Services</NavLink>
            <NavLink to='/'>Loans</NavLink>
            <NavLink to='/'>Payment Services</NavLink>
            <NavLink to='/'>Collection Services</NavLink>
            <NavLink to='/'>Trade/Forex</NavLink>
            <NavLink to='/'>Supply Chain</NavLink>
            <NavLink to='/'>Service Requests</NavLink>
            <NavLink to='/'>Other Products and Services</NavLink>
            <NavLink to='/'>Settings</NavLink>
        </nav>
    )
}