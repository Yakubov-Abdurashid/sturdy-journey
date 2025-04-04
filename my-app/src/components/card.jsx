import imgli7 from "../assets/prezident@2x.jpg"
import imgli8 from "../assets/i 1.jpg"
import imgli9 from "../assets/i 2.jpg"
import imgli10 from "../assets/i 3.jpg"
import imgli11 from "../assets/i 4.jpg"
import imgli12 from "../assets/i 5.jpg"
import "./card.css"

function Card() {
    return(
        <>
         
       <div className="card_list">
        <div className="cardkila">
            <img className="carda1" src={imgli7} alt="" />
            <h3>Мирзиёев рассказал, зачем было построено <br />
            Сардобинское водохранилище</h3>
            <p>05:28 / 16.05.2020</p>
        </div>
        <div className="cardkila">
            <img className="carda1" src={imgli8} alt="" />
            <h3>Выявлено еще 7 случаев коронавируса</h3><br />
            <p>05:28 / 16.05.2020</p>
        </div>
        <div className="cardkila">
            <img className="carda1" src={imgli9} alt="" />
            <h3>Карантин в Узбекистане продлен до 1 июня</h3><br />
            <p>05:28 / 16.05.2020</p>
        </div>
        <div className="cardkila">
            <img className="carda1" src={imgli10} alt="" />
            <h3>Следствие проверяет четыре версии <br />
            прорыва Сардобинской плотины</h3>
            <p>05:28 / 16.05.2020</p>
        </div>
        <div className="cardkila">
            <img className="carda1" src={imgli11} alt="" />
            <h3>Обмелевшая Сардоба: стихия или  <br />
            человеческий фактор?</h3>
            <p>05:28 / 16.05.2020</p>
        </div>
        <div className="cardkila">
            <img className="carda1" src={imgli12} alt="" />
            <h3>Итоги второго месяца карантина</h3><br />
            <p>05:28 / 16.05.2020</p>
        </div>
      
       </div>
     <div className="sab">
     <div className="yjea">
     <i class="fa-regular fa-bell"></i>
      <h3>Хотите узнать новости первыми? подключите уведомления!
      </h3>
     </div>
     <button className="btnadq">Включит  уведомления!
     </button>
     </div>
        </>
    )
}
export default Card