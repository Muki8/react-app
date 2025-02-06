import React, { useState } from "react";

const TablaMultiplicar = () => {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const calcularTabla = () => {
    const num = parseInt(numero, 10);
    if (num) {
      setTabla(Array.from({ length: 13 }, (_, i) => `${num} x ${i + 1} = ${num * (i + 1)}`));
    }
  };

  return (
    <div>
      <h1>Tabla de Multiplicar</h1>
      <input type="number" onChange={(e) => setNumero(e.target.value)} />
      <button onClick={calcularTabla}>Generar</button>
      <ul>{tabla.map((linea, i) => <li key={i}>{linea}</li>)}</ul>
    </div>
  );
};

export default TablaMultiplicar;
