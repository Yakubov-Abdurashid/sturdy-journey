import { useState } from "react";
import imgli7 from "../assets/prezident@2x.jpg";
import imgli8 from "../assets/i 1.jpg";
import imgli9 from "../assets/i 2.jpg";
import imgli10 from "../assets/i 3.jpg";
import imgli11 from "../assets/i 4.jpg";
import imgli12 from "../assets/Rectangle 41.png";

import "./azalik.css";

const newsList = [
  { img: imgli10, time: "11:31 / 15.05.2020" },
  { img: imgli7, time: "11:31 / 15.05.2020" },
  { img: imgli8, time: "11:31 / 15.05.2020" },
  { img: imgli9, time: "11:31 / 15.05.2020" },
  { img: imgli11, time: "11:31 / 15.05.2020" },
];

function Azalik() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="kalll">
      <div className="lbaok">
        <h3>Последние новости</h3>
        <br />
        {newsList.slice(0, showMore ? newsList.length : 4).map((news, index) => (
          <div className="chuxan" key={index}>
            <img src={news.img} alt={`Новость ${index + 1}`} />
            <div className="texno">
              <h3>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </h3>
              <p>
                После прорыва дамбы Сардобинского водохранилища возбуждено
                уголовное дело, сообщили в пресс-службе Генпрокуратуры
                Узбекистана.
              </p>
              <p>{news.time}</p>
            </div>
          </div>
        ))}

        <button className="asqqsq" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Скрыть" : "Больше новостей"}
        </button>
      </div>

      <div className="rblok">
        <div className="rblok2">
          <h3>Самые популярные новости</h3>

          {[...Array(4)].map((_, idx) => (
            <div className="rblok-blok" key={idx}>
              <p>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </p>
              <p>11:31 / 15.05.2020</p>
            </div>
          ))}
        </div>

        <img className="imgli12" src={imgli12} alt="реклама или баннер" />
      </div>
    </div>
  );
}

export default Azalik;
