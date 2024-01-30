import { useContext } from "react"
import { apiCallContext } from "../../Context/Context"


export const Houses = () => {

    const{houses}=useContext(apiCallContext)
    console.log("soy houses",houses)
  return (
    <div>Houses</div>
  )
}
