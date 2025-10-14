import { NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

export default function Layout() {
    return (
        <>
            <Header>
                <NavLink to="/" className="header__link">Главная</NavLink>
                <NavLink to="/guess-the-number" className="header__link">Игра угадай число</NavLink>
                <NavLink to="/two-chairs-game" className="header__link">Игра два стула</NavLink>
                <NavLink to="/about-me" className="header__link">Обо мне</NavLink>
            </Header>
            <main style={{width: "100%"}}>
                <Outlet />
            </main>
            <footer></footer>
        </>

    )
}