import {useState} from "react";
import Button from "../../../components/Button/Button.tsx";
import Modal from "../../../components/Modal/Modal.tsx";

export default function ContentNumberTitle() {
   const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>

            {/*<h1 className="header__title">{'Угадай число'}</h1>*/}
           <Button
               onClick={() => setIsModalOpen(true)}
               className={"button-rules button-transform"}
           >
               {"Правила игры"}</Button>
            <Modal
                className="headerModal"
                open={isModalOpen}
                onClose={(() => setIsModalOpen(false))}
            >
                        <h2>Угадай число</h2>
                        <ul>
                            <li>1. Загадывается число от 1 до 100</li>
                            <li>2. У вас есть 5 попыток, чтобы его угадать</li>
                            <li>
                                3. После каждой попытки будет подсказка: число больше или меньше
                            </li>
                            <li>4. Если не угадали за 5 попыток — игра заканчивается</li>
                            <li>5. Можно начать заново и попробовать ещё раз</li>
                        </ul>
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            className="modal__button-close button-transform"
                        >
                            {"Понятно"}</Button>
            </Modal>
        </>
    )
}