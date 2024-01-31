import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiCallContext } from '../../Context/Context';



export const House = () => {
  const {id} = useParams();
  const { house, setIdHouse } = useContext(apiCallContext);

  useEffect(()=> {
    setIdHouse(id);
  },[id,setIdHouse])

  console.log(house)

    return (

      <>
      {house.name}</>
    )
  }
  