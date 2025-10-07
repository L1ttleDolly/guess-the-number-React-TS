import Button from "../Button/Button.tsx";
import Modal from "../Modal/Modal.tsx";
import {useState} from "react";

export default function AsideMenu() {

    const [isModalOpen, setIsModalOpen] = useState( false)

    return (
            <aside className="nav-container">

                <Button className="asideButton" onClick={() => setIsModalOpen(true)}>tab</Button>
                <Button className="asideButton" onClick={() => setIsModalOpen(true)}>tab</Button>
                <Button className="asideButton" onClick={() => setIsModalOpen(true)}>tab</Button>
                <Modal
                    className="asideModal"
                    open={isModalOpen}
                    onClose={(() => setIsModalOpen(false))
                }
                >
                    {"Этот раздел пока не доступен!"}
                    <Button className="asideButtonModalClose" onClick={() => setIsModalOpen(false)}>{"Хорошо :("}</Button>
                </Modal>
            </aside>
    )
}