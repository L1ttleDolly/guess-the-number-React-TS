import MainPage from "./pages/HomePage/HomePage.tsx";
import SectionGameNumberContent from "./pages/GuessTheNumberPage/SectionGameNumberContent.tsx";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import Layout from "./pages/Layout.tsx";
import TwoChairsPage from "./pages/TwoChairsPage/TwoChairsPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="guess-the-number" element={<SectionGameNumberContent />} />
                    <Route path="two-chairs-game" element={<TwoChairsPage />} />
                    <Route path="about-me" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}
