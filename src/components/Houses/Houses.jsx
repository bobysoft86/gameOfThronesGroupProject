import { useContext } from "react"
import { apiCallContext } from "../../Context/Context"
import { Link } from "react-router-dom";
import ".//Houses.css"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


export const Houses = () => {

    const{houses}=useContext(apiCallContext)
    // console.log("soy houses",houses)
  return (
    <>
    {/* <div>Houses</div> */}
    <div className="houses_container">
    <Nav></Nav>
      {houses.map((houses,index)=>{
        return(
          <div  key={houses.id} className="card_container">
            <Link to={`/houses/${houses.id}`}><img key={index} src={`../../..${houses.image}`} alt="houses"></img></Link>
          <h3>{houses.name}</h3>
          </div>
        )
      })}
    <Footer></Footer>
    </div>
    </>
  )
}

// /images/characters/
