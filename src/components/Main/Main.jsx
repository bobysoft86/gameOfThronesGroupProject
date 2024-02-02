import Footer from "../Footer/Footer";
import "../Main/Main.css";
import Nav from "../Nav/Nav";

export const Main = () => {
  return (
    <div className="main_container">
      <div className="home_nav">
      <div className="home_flags">
      <Nav></Nav>
      </div>
      </div>
      <div>
        <h1 className="title">
          GAME OF <br />
          THRONES
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
};
