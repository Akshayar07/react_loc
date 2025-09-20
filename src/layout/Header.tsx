import LogoSection from '../components/LogoSection'
import PrimaryNavigation from "./PrimaryNavigation"
import LoginInfo from "../components/LoginInfo"

export default function Header() {
    return (
        <div className="shadow-md sticky z-50 bg-stone-100 top-0 right-0 left-0">
            <LogoSection />
            <PrimaryNavigation />
            <LoginInfo />
        </div>
    )
}