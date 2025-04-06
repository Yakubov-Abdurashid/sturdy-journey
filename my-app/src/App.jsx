import imgli0 from "./assets/logo.png"
import imgli3 from "./assets/NAMANGANLIKLAR24.png"
import imgli1 from "./assets/cif_ru.png"
import imgli2 from "./assets/nrg-banner.jpg"
import hamidd from "./assets/hamidd.png"
import hamidd2 from "./assets/hamidd2.png"
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
      <main>
        <h2>Напишите нам</h2>
        <div className="box1">
          <div className="box2">
            <input className="input" type="text" placeholder="Имя" />
            <input className="input" type="text" placeholder="Электронная почта" />
            <input className="input" type="text" placeholder="Номер телефона" />
            <input className="input" type="text" placeholder="Тема" />
            <textarea id="summary" placeholder="Текст" name="summary" required></textarea>
            <div className="hamidjj">
              <input className="input2" type="text" placeholder="Прикрепить файл 📃" />
              <div className="gggg">
                <input className="input2" type="text" placeholder="Код" />
                <h3>4k7Za</h3>
              </div>

            </div>
            <button>Отправить</button>
          </div>
          <div className="box3">
            <div className="box3">
              <div className="contact-card">
                <h1 className="contact-title">NAMANGANLIKLAR24</h1>

                <div className="row">
                  <span>Электронная почта</span>
                  <span>info@namanganliklar24.uz</span>
                </div>

                <div className="row">
                  <span>Социальные сети</span>
                  <div className="icons">
                    <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                    <i className="fa-brands fa-odnoklassniki" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="row">
                  <span>Телеграм канал</span>
                  <button className="knopka">
                    <i class="fa-brands fa-telegram"></i> Подписаться
                  </button>
                </div>

                <div className="row">
                  <span>Мобильная приложение</span>
                  <div className="apps">
                  <img src={hamidd} alt="" />
                  <img src={hamidd2} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
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
