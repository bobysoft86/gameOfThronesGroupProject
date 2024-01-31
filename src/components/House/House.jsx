import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiCallContext } from "../../Context/Context";

export const House = () => {
  const { idHouse } = useParams();
  const { house, setIdHouse } = useContext(apiCallContext);
  console.log("soy id character", house);

  useEffect(() => {
    setIdHouse(idHouse);
  }, [idHouse, setIdHouse]);
  

  return (
    <div>
      <h1>HOLA</h1>
      <img src={`../../..${house.image}`} alt={house.name} />
    </div>
  );
};
