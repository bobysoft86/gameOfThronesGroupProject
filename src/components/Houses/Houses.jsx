import { useContext } from "react";
import { apiCallContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import ".//Houses.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SimpleBar from "simplebar-react";

export const Houses = () => {
  const { houses } = useContext(apiCallContext);
  // console.log("soy houses",houses)
  

  return (
    <>
      {/* <div>Houses</div> */}
      <div className="main_houses_container">
      <div className="nav_houses_container">
        <div className="nav_houses_container_Left">
        <img src="../../../images/nav_images/lupa.png" className="lupa"></img>
          <input type="text" placeholder="Buscar" className="buscar_input"></input>
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
      <SimpleBar style={{ MaxHeight: "70vh" }} minSize={20} autoHide={false}>
        <div className="houses_container">
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
          <Footer></Footer>
        </div>
      </SimpleBar>
      </div>
    </>
  );
};

// /images/characters/
