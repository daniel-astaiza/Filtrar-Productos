import React from 'react';
import "./modal.css"
import Formulario from './Formulario';

const Modal = ({ isOpen, closeModal, children }) => {
    return (
        <div class='modal ' style={{ display: isOpen ? "grid" : "none" }}>
            <div class="ventana">
            <button className='btn-primary' type='button' onClick={closeModal}> cerrar </button>
                {children}
            </div>
            

                
        </div>


    );
}

export default Modal;