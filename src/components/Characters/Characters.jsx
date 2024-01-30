import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";


export const Characters = () => {

    const {characters}= useContext(apiCallContext);
    console.log("soy characters",characters)


  return (
    <div>Characters</div>
  )
}
