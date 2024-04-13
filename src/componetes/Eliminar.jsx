import React from 'react';
import Modal from './Modal';

const Eliminar = ({onClick}) => {
    return (
        <div className=' d-flex gap-2'>
            <button onClick={onClick} type='button' className='btn btn-danger'>Eliminar</button>
            <div>
            </div>

        </div>
    );
}

export default Eliminar;