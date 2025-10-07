import HeaderContent from "./HeaderContent.tsx";
import AsideMenu from "../AsideMenu/AsideMenu.tsx";


export default function Header() {
    return (
        <header className="header__container">
            <AsideMenu />
            <HeaderContent />

        </header>
    )
}