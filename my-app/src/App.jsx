import imgli0 from "./assets/logo.png"
import imgli3 from "./assets/NAMANGANLIKLAR24.png"
import imgli1 from "./assets/cif_ru.png"
import imgli2 from "./assets/nrg-banner.jpg"
import Karona from "./components/karona"
import Card from "./components/card"
import Azalik from "./components/azalik"
import './App.css'

function App() {

  return (
    <>
    
      <div className="azizlegion">
        <div className="header1">
          <div className="bosh">
            <img src={imgli0} alt="" />
            <p>
              <span style={{ color: "blue", fontWeight: "900" }}>
                $
              </span>
              10137.2
            </p>
            <p>
              <span style={{ color: "blue", fontWeight: "900" }}>
                P
              </span>
              138.26
            </p>
            <p>
              <span style={{ color: "blue", fontWeight: "900" }}>
                E
              </span>
              10988.72
            </p>
          </div>


          <div className="bosh1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div className="ti">
              <img src={imgli1} alt="" />
              <h2>РУ</h2>
            </div>
            <button className="btn1">
              <i class="fa-brands fa-telegram"></i>     Подписатся
            </button>
          </div>
        </div>

        <div className="header2">
          <ul>
            <li><a href="">Узбекистана</a></li>
            <li><a href="">Мир</a></li>
            <li><a href="">            Экономика                                          </a></li>
            <li><a href="">                  Политика                                    </a></li>
            <li><a href="">Общество                              </a></li>
            <li><a href="">Технологии                        </a></li>
            <li><a href="">Спорт                  </a></li>
            <li><a href="">    Культура            </a></li>
            <li><a href="">   Происшествия      </a></li>
            <li><a href="">Туризм</a></li>
          </ul>
        </div>
        <div className="header3">
          <img src={imgli2} alt="" />
        </div>
      </div>
      <Karona />
      <Card></Card>
      <Azalik></Azalik>

      <footer>
        <div className="foa">
          <img src={imgli3} alt="" />

          <div className="ku">
            <p>Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p>
            <button className="btn1">
              <i class="fa-brands fa-telegram"></i>     Подписатся
            </button>
          </div>
        </div>


        <div className="lal">
          <div className="mul"><h5>О сайте </h5>
            <p>О сайте
              Воспроизводство, копирование, тиражирование, распростране ние и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.
            </p>
          </div>
          <div className="mul"><h5>
            Информация о сайте         </h5>


            <p>

              Напишите нам   <br />
              Реклама   <br />
              Прислать новость</p></div>
          <div className="mul">
            <h5>
              Использование материалов


            </h5>
            <p>
              Темы дня  <br />
              Наша команда
            </p>
          </div>
        </div>
      </footer>

      

    </>
  )
}

export default App
