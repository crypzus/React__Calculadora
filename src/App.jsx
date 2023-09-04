import { useState } from "react";
import "./App.css";
import Logo from "./componetes/logo";
import Boton from "./componetes/boton";
import Pantalla from "./componetes/pantalla";
import BotonClear from "./componetes/BotonClear";
import { evaluate, sqrt } from "mathjs";

function App() {
  const [input, setInput] = useState('0');
  
//fncion para mostraer los numeros por pantalla++++++++++++++++++++++++++++++++++++++++++++
  const agregarInput = e => {
    //operador ternario para remplazar el cero por el primer numero ingresado 
    input === '0' ? setInput(e): setInput(input + e)
    //tradicional
    // if (input === '0') {
    //   setInput(e);
    // } else {
    //   setInput(input + e);
    // }
  };
  //funcion para sacar la raiz cuandrada
  const raiz = ()=>{
    setInput(sqrt(input));
  }

  //funcion para obtner el resultado+++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const calcularResultado = ()=>{
    
    const expresionModificada = input.replace(/÷/g, '/').replace(/x/g, '*').replace(/input%/g, 'input/100');
    setInput(evaluate(expresionModificada));
  }
  //funcion para cambiar de signo el resultado
  const cambioSigno = () =>{
    if (input === input){
      setInput(-input)
    }
  };

  

  return (
    <div className="App">
     <Logo/>
      <div className="contenedor-calculadora">
        <Pantalla input = {input}/>
        <div className="fila">
          <Boton manejarInput = {raiz}>√</Boton>
          <Boton manejarInput = {agregarInput}> % </Boton>
          {/* tambien se puede agregar funciones directo al boton, se le conoce como funcion anonima*/}
          <BotonClear manejarInput = {()=> setInput('0')}> C </BotonClear>
          <Boton manejarInput = {agregarInput}> ÷ </Boton>
        </div>
        <div className="fila">
          <Boton manejarInput = {agregarInput}>7</Boton>
          <Boton manejarInput = {agregarInput}>8</Boton>
          <Boton manejarInput = {agregarInput}>9</Boton>
          <Boton manejarInput = {agregarInput}> x </Boton>
        </div>
        <div className="fila">
          <Boton manejarInput = {agregarInput}>4</Boton>
          <Boton manejarInput = {agregarInput}>5</Boton>
          <Boton manejarInput = {agregarInput}>6</Boton>
          <Boton manejarInput = {agregarInput}> - </Boton>
        </div>
        <div className="fila">
          <Boton manejarInput = {agregarInput}>1</Boton>
          <Boton manejarInput = {agregarInput}>2</Boton>
          <Boton manejarInput = {agregarInput}>3</Boton>
          <Boton manejarInput = {agregarInput}> + </Boton>
        </div>
        <div className="fila">
          <Boton manejarInput = {cambioSigno}> +/- </Boton>
          <Boton manejarInput = {agregarInput}>0</Boton>
          <Boton manejarInput = {agregarInput}> . </Boton>
          <Boton manejarInput = {calcularResultado}> = </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
