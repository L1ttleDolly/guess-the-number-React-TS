import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

export default function Layout() {
    return (
        <>
            <Header>
                <Link to="/" className="header__link">Главная</Link>
                <Link to="/guess-the-number" className="header__link">Игра угадай число</Link>
                <Link to="/two-chairs-game" className="header__link">Игра два стула</Link>
                <Link to="/about-me" className="header__link">Обо мне</Link>
            </Header>
            <main style={{width: "100%"}}>
                <Outlet />
            </main>
            <footer></footer>
        </>

    )
}