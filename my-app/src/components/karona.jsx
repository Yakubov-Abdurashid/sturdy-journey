import imgli3 from "../assets/icon-covid.png"
import imgli4 from "../assets/icon-dead.png"
import imgli5 from "../assets/icon-infected.png"
import imgli6 from "../assets/icon-recovered.png"
import "./karona.css"
function Karona() {
    return(
        <>
        <div className="asq">
            <div className="bloa1"> <img src={imgli3} alt="" /> <h3>Коронавирус COVID-19 <br />
            в Узбекистане</h3> </div>
            <div className="bloa2"><img src={imgli5} alt="" />  <div className="texo">
            <h3><span style={{color:"red"}}>Инфицированы
            </span></h3>
            <h2>2753</h2>
            </div>
            </div>
            <div className="bloa3"><img src={imgli6} alt="" /><div className="texo">
            <h3><span style={{color:"green"}}>Выздоровели
            
            </span></h3>
            <h2>2245</h2>
            </div></div>
            <div className="bloa4"> <img src={imgli4} alt="" /> <div className="texo">
            <h3><span >Умерли
            
            
            </span></h3>
            <h2>12</h2>
            </div></div>
        </div>
        
        </>
    )
}

export default Karona