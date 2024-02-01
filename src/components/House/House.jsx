import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ".//House.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

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
      <div>
        <Nav></Nav>
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
        ;<Footer></Footer>
      </div>
    </div>
  );
};
