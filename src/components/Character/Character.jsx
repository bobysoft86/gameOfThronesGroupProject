import React, { useContext, useEffect } from 'react'
import './Character.css'
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


    <div className='general'>
      <div className='character'>
        <img className='imagen' src={`../../..${character.image}`} alt={character.name} />
        <p>{character.name}</p>
      </div>
      <div className='informacion'>
        <div className='casa'></div>
        <div className='alianzas'>
          <h3>Alianzas</h3>
          <p>{character.alliances}</p>
          {/*{character.alliances.map((element)=>{
            console.log(element)
            return (
              <div key={element.id}>
                <li>{element}</li>
              </div>
            )
          })}*/}
        </div>
        <div className='apariciones'>
          <h3>Apariciones</h3>
          <p>{character.episodes}</p>
        </div>{}
        <div className='padres'>
          <h3>Padres</h3>
          <p>{character.parents}</p>
        </div>
        <div className='hijos'>
          <h3>Descendientes</h3>
          <p>{character.siblings}</p>
        </div>
        <div className='titulos'>
          <h3>Titulos</h3>
          <p>{character.titles}</p>
        </div>
      </div>
    </div>
  )
}
