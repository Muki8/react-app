import React, { useState } from "react";
import { convertirNumeroALetras } from "../utils/convertirNumero"; 

const Traductor = () => {
  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");

  const traducir = () => {
    const num = parseInt(numero, 10);
    if (num >= 1 && num <= 1000) {
      setTexto(convertirNumeroALetras(num));
    } else {
      setTexto("Número fuera de rango");
    }
  };

  return (
    <div>
      <h1>Traductor de Números</h1>
      <input type="number" onChange={(e) => setNumero(e.target.value)} />
      <button onClick={traducir}>Traducir</button>
      <p>{texto}</p>
    </div>
  );
};

export default Traductor;
