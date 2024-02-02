import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const apiCallContext = createContext();
 
const baseUrl="http://localhost:3001"

export const ApiProvider = ({children}) => {

const[characters, setCharacters]= useState([])
const[houses, setHouses]= useState([])
const[character, setCharacter]= useState([])
const[house, sethouse]= useState([])
const[sortedCharacters,setSortedCharacters]=useState([])
const[search,setSearch]=useState([])


const[id,setId]=useState('');
const[idHouse,setIdHouse]=useState('')

useEffect(() => {
  console.log(search);
  const getSearch = async () => {
    const charactersApi = await fetch(`${baseUrl}/characters?name=${search}`);
    const characterJson = await charactersApi.json();
    setCharacters(characterJson);
  };
  getSearch();
}, [search]);
useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(`${baseUrl}/characters`);
      const characterJson = await charactersApi.json();
      setCharacters(characterJson);
    };
    getCharacters();
  }, []);




  useEffect(() => {
    const getsortedCharacters = async () => {
      const charactersApi = await fetch(`${baseUrl}/characters`);
      const characterJson = await charactersApi.json();
      setSortedCharacters(characterJson.sort((a,b)=>a.age-b.age))

    };
    getsortedCharacters();
  }, []);

  useEffect(() => {
    const getHouses = async () => {
      const HousesApi = await fetch(`${baseUrl}/houses`);
      const houseJson = await HousesApi.json();
      setHouses(houseJson);
    };
    getHouses();
  }, []);
    
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
<apiCallContext.Provider value={{characters,setSearch,setCharacters,sortedCharacters,setSortedCharacters,character,houses,setId,setIdHouse,house}}>
      {children}
    </apiCallContext.Provider>  )
}
