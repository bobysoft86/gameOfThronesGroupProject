import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const apiCallContext = createContext();
 
const baseUrl="http://localhost:3001"

export const ApiProvider = ({children}) => {

const[characters, setCharacters]= useState([])
const[houses, setHouses]= useState([])
const[character, setCharacter]= useState([])
const[house, sethouse]= useState([])

const[id,setId]=useState('');
const[idHouse,setIdHouse]=useState('')





useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(`${baseUrl}/characters`);
      const characterJson = await charactersApi.json();
      setCharacters(characterJson);
      console.log(characterJson)
    };
    getCharacters();
  }, []);
  useEffect(() => {
    const getHouses = async () => {
      const HousesApi = await fetch(`${baseUrl}/houses`);
      const houseJson = await HousesApi.json();
      setHouses(houseJson);
      console.log(houseJson)
    };
    getHouses();
  }, []);

  useEffect(() => {
    const getCharactersId = async () => {

      const charactersApi = await fetch(`${baseUrl}/characters/${id}`);
      const characterJson = await charactersApi.json();
      setCharacter(characterJson);
    };
    getCharactersId();
  }, [id]);

  useEffect(() => {
    const getHouseId = async () => {

      const housesApi = await fetch(`${baseUrl}/houses/${idHouse}`);
      const houseJson = await housesApi.json();
      sethouse(houseJson);
      console.log("soy la api de houseid",houseJson)
    };
    getHouseId();
  }, [idHouse]);

  
  return (
<apiCallContext.Provider value={{characters,character,houses,setId,setIdHouse,house}}>
      {children}
    </apiCallContext.Provider>  )
}
