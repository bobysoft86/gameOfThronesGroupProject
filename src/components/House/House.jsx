import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ".//House.css";
import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";

const baseUrl = "http://localhost:3001";

export const House = () => {
  const [house, setHouse] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHouseId = async () => {
      try {
        const houseApi = await fetch(`${baseUrl}/houses/${id}`);
        const houseJson = await houseApi.json();
        setHouse(houseJson);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHouseId();
  }, [id]);

  return (
    <div className="background_container">
      <div className="nav_houses_container">
        <div className="nav_houses_container_Left">
          <Link to={"/houses"}>
            <img className="flecha" src="../../../images/nav_images/flecha.png" alt="casa"></img>
          </Link>
          <Link to={"/houses"} className="volver">
          <p className="volver">Volver</p>
          </Link>
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
      <div>
        {loading ? (
          <p>loading</p>
        ) : (
          <div className="main_container_house">
            <div className="first_container">
              <div className="house_card">
                <img src={house.image}></img>
                <h3>{house.name}</h3>
              </div>
            </div>
            <div className="second_container">
              <div className="datos">
                <h3>Sede</h3>
                <p>{house.settlement}</p>
              </div>
              <div className="datos">
                <h3>Region</h3>
                <p>{house.region}</p>
              </div>
              <div className="datos">
                <h3>Alianzas</h3>
                {house.alliances.map((alliances, index) => (
                  <p key={index}>{alliances}</p>
                ))}
              </div>
              <div className="datos">
                <h3>Religiones</h3>
                {house.religions.map((religions, index) => (
                  <p key={index}>{religions}</p>
                ))}
              </div>
              <div className="datos">
                <h3>Fundacion</h3>
                <p>{house.foundation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
