import React, { useState } from 'react';
import "./Formulario.css"
import swal from 'sweetalert';




function Formulario({AgregarEditar , idProducto ,productosA }){

    const [id , setId]=useState(idProducto);
    const [nombre, setNombre]= useState("");
    const [caracteristicas, setCaracteristica] = useState("");

    const editar = (event)=>{
        event.preventDefault();

        if(id.trim() ==""|| nombre.trim()==""|| caracteristicas.trim()==""){
           swal({
            title:"ingrese los campos correspondientes",
            icon:"warning",
           }) ;
           return;
        }

       const evento = productosA.findIndex((productos) =>productos.id ==id);
       if (evento !== -1){
        const nuevo =[...productosA];
        nuevo[evento]={id,nombre,caracteristicas};
        AgregarEditar(nuevo);
        swal({
            text:"se agrego el nuevo producto",
            icon:"success",
        });
       } else {
        AgregarEditar([...productosA, { id, nombre, caracteristicas }]);
        swal({
            text: "el producto se agregado",
            icon: "success",
        });
    }



       setId("");
       setNombre("");
       setCaracteristica("");


    




    };




    return (
        <div className='modal-ventana'>
            <form className='d-flex flex-column align-items-center justify-content-center gap-4' onSubmit={editar}>
                <input class='input-estilo'
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Id"
                />
                <input class='input-estilo'
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input class='input-estilo'
                    type="text"
                    value={caracteristicas}
                    onChange={(e) => setCaracteristica(e.target.value)}
                    placeholder="Características"
                />
                <button className='btn btn-primary' type="submit">agregar</button>
            </form>
        </div>
    );


}


export default Formulario;