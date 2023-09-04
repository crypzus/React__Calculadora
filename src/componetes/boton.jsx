import React from "react";
import '../css/boton.css';


function Boton ({children, manejarInput}){
    const esOperador = valor =>{
        return isNaN (valor)&& (valor !== '.') && (valor !== '=');
    }

    
    return(
        <div className={`boton-contenedor ${esOperador(children)? 'operador': null}`.trimEnd() } onClick ={()=> manejarInput(children)}>
            {children}
        </div>
    )
};

export default Boton;