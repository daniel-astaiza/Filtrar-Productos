import { createContext, useState } from "react";


export const Globalcontext = createContext()

const GlobalcontextProvider = ({children}) => {


    const [filtrar, setFiltrar] = useState("");


    return (
        <Globalcontext.Provider value={{
            filtrar, 
            setFiltrar
        }}>
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalcontextProvider;