import { useEffect, useState } from "react";

const Chronology = () => {
  
  const[characters, setCharacters]= useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {

const baseUrl="http://localhost:3001"



    const getCharacters = async () => {
    try {
        const charactersApi = await fetch(`${baseUrl}/characters`);
        const characterJson = await charactersApi.json();
        setCharacters(characterJson);

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
    
  };
  getCharacters();
}
, []);
console.log(characters.sort((a,b)=> a.value - b.value ));
return (
  <div>
    {loading ? (
      <p>loading</p>
    ) : (
      <h1>holaaa</h1>
    )}
  </div>
);
};

export default Chronology
