import React from 'react';
import Modal from './Modal';
import { useState } from 'react';
import Formulario from './Formulario';

const Tabla = ({productos , eliminar , AgregarEditar, productosA}) => {
    const [isModalOpen ,setIsModalOpen] = useState(false)
    const[] = useState(false)
    return (
        <div>
            <table className="table border border-black ">
                <thead>
                    <tr className='table-dark'>
                        <td className="col border border-black ">id</td>
                        <td className="col border border-black ">nombre</td>
                        <td className="col border border-black ">caracteristicas</td>
                        <td className="col border border-black ">acciones</td>
                    </tr>
                </thead>
                <tbody className='border border-black' >
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <td className='border border-black'>{producto.id}</td>
                        <td className='border border-black'>{producto.nombre}</td>
                        <td className='border border-black'>{producto.caracteristicas}</td>
                        <td className='border border-black d-flex gap-2'>
                            <div>
                                <button onClick={()=>eliminar(producto.id)} 
                                type='button' 
                                className='btn btn-danger'>Eliminar</button>
                            </div>
                            <div>
                                <button onClick={() => setIsModalOpen(producto.id)} 
                                type="button" 
                                className=" btn btn-success ">Editar</button>
                                <Modal isOpen={isModalOpen === producto.id} onClose={() => setIsModalOpen(false)}
                                 closeModal={() => setIsModalOpen(false)} >
                                    <Formulario title=" actualizar formulario" AgregarEditar={AgregarEditar} productosA={productosA} idProducto={producto.id}></Formulario>
                                    
                                     
                                </Modal>
                            </div>
                        </td>
                    </tr>  
                ))}


                </tbody>
            </table>
           

            
        </div>
    );
}

export default Tabla;