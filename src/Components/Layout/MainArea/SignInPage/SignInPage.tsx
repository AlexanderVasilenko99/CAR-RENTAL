import { useState } from "react";
import Modal from 'react-modal';
import SignInForm from "./SignInForm/SignInForm";
import "./SignInPage.css";

function SignInPage(): JSX.Element {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    function openModal(): void {
        setIsOpen(true);
    }

    function closeModal(): void {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: 0,

            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div className="SignInPage">
            <h1>sign in page</h1>
            <button onClick={openModal}>open</button>

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <SignInForm />
            </Modal>
        </div>
    );
}

export default SignInPage;
