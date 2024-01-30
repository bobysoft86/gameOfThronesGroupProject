import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiCallContext } from '../../Context/Context';





export const Character = () => {
  
  const {id} = useParams();
  const { character, setId } = useContext(apiCallContext);
  console.log("soy id character",character)


  useEffect(()=> {
    setId(id);
  },[id,setId])


  return (

    <img src={`../../..${character.image}`} alt={character.name} />
  )
}
