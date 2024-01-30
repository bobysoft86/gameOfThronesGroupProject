import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const apiCallContext = createContext();
 
const baseUrl="http://localhost:3000/"

export const apiProvider = ({children}) => {

const[characters, setCharacters]= useState([])



useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await axios.get(`${baseUrl}/characters`);
        setCharacters(charactersApi.data);
        console.log("soy api",characters.data.results)
    };
    getCharacters();

  }, []);






  return (
<apiCall.Provider value={characters}>
      {children}
    </apiCall.Provider>  )
}
