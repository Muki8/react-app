import React, { useState } from "react";

const Sumadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div>
      <h1>Sumadora</h1>
      <input type="number" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" onChange={(e) => setNum2(e.target.value)} />
      <button onClick={sumar}>Sumar</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
};

export default Sumadora;
