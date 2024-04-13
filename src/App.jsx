import { useState, useContext } from 'react'
import './App.css'
import swal from "sweetalert";
import Tabla from './componetes/Tabla';
import Input from './componetes/Input';
import { Globalcontext } from './context/Globalcontext';
import Paginacion1 from './componetes/Paginacion1';
import Modal from './componetes/Modal';
import Formulario from './componetes/Formulario';

function App(){


  const [isModalOpen ,setIsModalOpen] = useState(false)
  const[] = useState(false)
  const { filtrar, setFiltrar } = useContext(Globalcontext)
  const [Contador, setContador] = useState(5);

  const [productosA , setProductosA] = useState([
    { id: "1", nombre: "Laptop", caracteristicas: "Viene con procesador de última generación" },
    { id: "2", nombre: "Smartphone", caracteristicas: "Cuenta con pantalla OLED de alta resolución" },
    { id: "3", nombre: "Cámara", caracteristicas: "Captura imágenes en alta definición" },
    { id: "4", nombre: "Tablet", caracteristicas: "Ideal para la productividad y el entretenimiento" },
    { id: "5", nombre: "Consola de juegos", caracteristicas: "Ofrece una experiencia de juego inmersiva" },
    { id: "6", nombre: "Drone", caracteristicas: "Equipado con tecnología de vuelo autónomo" },
    { id: "7", nombre: "Auriculares inalámbricos", caracteristicas: "Con cancelación de ruido activa" },
    { id: "8", nombre: "Impresora 3D", caracteristicas: "Permite crear objetos tridimensionales con precisión" },
    { id: "9", nombre: "Robot aspirador", caracteristicas: "Mantén tu hogar limpio sin esfuerzo" },
    { id: "10",nombre: "Bicicleta eléctrica", caracteristicas: "Perfecta para moverte por la ciudad de manera ecológica" },
    { id: "11",nombre: "Horno de convección", caracteristicas: "Cocina tus platos favoritos de manera rápida y uniforme" },
    { id: "12",nombre: "Proyector portátil", caracteristicas: "Disfruta de tus películas y series en cualquier lugar" },
    { id: "13",nombre: "Teclado mecánico", caracteristicas: "Ideal para gamers y profesionales de la escritura" },
    { id: "14",nombre: "Cafetera espresso", caracteristicas: "Prepara café de alta calidad con solo pulsar un botón" },
    { id: "15",nombre: "Altavoz inteligente", caracteristicas: "Controla tu hogar con comandos de voz" },
    { id: "16",nombre: "Monitor curvo", caracteristicas: "Sumérgete en tus juegos y películas con una experiencia visual envolvente" },
    { id: "17",nombre: "Reloj inteligente", caracteristicas: "Mide tu actividad física y controla tus notificaciones desde tu muñeca" },
    { id: "18",nombre: "Barra de sonido", caracteristicas: "Mejora el audio de tu televisión con un sonido envolvente y claro" },
    { id: "19",nombre: "Batería externa", caracteristicas: "Mantén tus dispositivos cargados en todo momento" },
    { id: "20",nombre: "Luz inteligente", caracteristicas: "Personaliza la iluminación de tu hogar con tu teléfono móvil" }

  ]);
  const datos = (datosValue) =>{
    setFiltrar(datosValue)
  }
  const handleContadorChange = (e) => {
    setContador(Number(e.target.value));
  };
  const eliminar = (id) =>{
    const nuevo =[...productosA];
    const buscar = nuevo.findIndex(producto=> producto.id ==id);
    console.log(buscar,"se elimino");
    swal({
      title:"Eliminar",
      text:"Estas seguro de elimiar este producto",
      icon:"warning",
      buttons:["NO" , "SI"],
      timer:"2000"
      
    }).then(respuesta=>{
      
      if(respuesta){
        nuevo.splice(buscar , 1);
      setProductosA(nuevo);
        swal({ text:"el producto se borro correctamente",
      icon:"success"})
      }
    })
  };
  const ContadorOpciones = [5, 10, 15, 20,30];

  const productosO= productosA.filter(producto =>
    producto.id.includes(filtrar)  ||
    producto.nombre.toLowerCase().includes(filtrar.toLowerCase()) || 
    producto.caracteristicas.toLowerCase().includes(filtrar.toLowerCase()) 
  ).slice(0, Contador);
  
 
const AgregarEditar =(nuevo)=>{
  setProductosA(nuevo);
}




  



  return (
    <div className='d-flex align-items-center flex-column p-4 gap-3'>
       <p>PRODUCTOS</p>
      <Input datos={datos}></Input>
     
      <select value={Contador}
      onChange={handleContadorChange}>
        {ContadorOpciones.map((opcion)=>(
          <option key={opcion}
          value={opcion}>
          {opcion}
         </option>
        ))}
      </select>

      <Tabla productos={productosO}eliminar={eliminar}
      AgregarEditar={AgregarEditar}
      productosA={productosA}
      ></Tabla>
      <Paginacion1
      todosRegistro={productosO.length}
      totalPersonas={productosA.length}
      ></Paginacion1>
      <div>
      <button onClick={()=> setIsModalOpen(true)} type="button" className="btn btn-dark">Agregar</button>
      <Modal isOpen={isModalOpen} closeModal={() =>setIsModalOpen(false)} >
        <Formulario title="formulario agregar " AgregarEditar={AgregarEditar} productosA={productosA}></Formulario>
        {/* <Formulario></Formulario> */}
      </Modal>
      </div>
      

      
      



    </div>
  );
} 
export default App;






