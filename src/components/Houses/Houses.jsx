import { useContext, useEffect, useState } from "react";
import { apiCallContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import ".//Houses.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SimpleBar from "simplebar-react";

export const Houses = () => {
  const { houses, setHouses } = useContext(apiCallContext);
const [copyArray, setCopyArray] = useState([]); 
  // console.log("soy houses",houses)
  // console.log("prueba filter")

useEffect(()=> {
  setCopyArray (houses)
} ,[houses])
const handleInputValue = (event) => {
  let search = copyArray.filter((house) => house.name.includes(event.target.value))
  console.log("prueba filter",search)
  setHouses (search) 
  useEffect
}

  return (
    <>
      {/* <div>Houses</div> */}
      <div className="main_houses_container">
      <div className="nav_houses_container">
        <div className="nav_houses_container_Left">
        <img src="../../../images/nav_images/lupa.png" className="lupa"></img>
        <form>
                <label>
                  <input type="text" onChange={handleInputValue}  name="name" className="input_houses" placeholder="Buscar"/>
                  {/* <input type="text"name="name" className="input_houses" placeholder="Buscar"/> */}
                </label>
              </form>
        </div>
        <div className="nav_houses_container_Right">
          <div className="home_button">
            <Link to={"/"}>
              <img className="casa" src="../../../images/nav_images/casa.png" alt="casa"></img>
            </Link>
          </div>
          <div className="languages"></div>
          <Nav></Nav>
        </div>
      </div>
        <div className="houses_container">
      {/* <SimpleBar style={{ MaxHeight: "70vh" }} minSize={20} autoHide={false}> */}
          {houses.map((houses, index) => {
            return (
              <div key={houses.id} className="card_container">
                <Link to={`/houses/${houses.id}`}>
                  <img key={index} src={`../../..${houses.image}`} alt="houses"></img>
                </Link>
                <h3>{houses.name}</h3>
              </div>
            );
          })}
      {/* </SimpleBar> */}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

// /images/characters/
