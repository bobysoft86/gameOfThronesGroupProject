import Footer from "../Footer/Footer"
import "../Main/Main.css"
import Nav from "../Nav/Nav"



export const Main = () => {
  return (
    <div className="main_container">
    <Nav></Nav>
    <div>
    <h1 className="title">GAME OF <br/>THRONES</h1>
    {/* <div>Main</div> */}
    </div>
<Footer></Footer>
    </div>
  )
}
