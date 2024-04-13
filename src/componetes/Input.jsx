import { useContext } from "react"
import {Globalcontext} from "../context/Globalcontext"
const Input = () => {
  const { filtrar, setFiltrar } = useContext(Globalcontext)
  const haldleFiltroChange=(e)=>{
    const datosValue = e.target.value;
    setFiltrar(datosValue);
    datos(datosValue)
  }
  return (

    <div className="mb-3">
      <input 
      type="text"
       placeholder='FILTRAR' 
       value={filtrar}
       onChange={haldleFiltroChange} />
      
    </div>
  );
}

export default Input;
