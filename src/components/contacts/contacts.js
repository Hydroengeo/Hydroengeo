import Image from "next/image";
import Link from "next/link";

const contacts = () => {
  return (
    <>
      <section id="contacts">
        <div className="small-container">
          <h1 className="heading heading-top">Контакты</h1>
          <ul className="contacts__list">
            <div className="contacts__info">
              <h1 className="heading">Контакты</h1>

              <div className="info-wrapper">
                <p className="info__paragraph">100041 Узбекистан, Ташкент</p>

                <p className="info__paragraph">ул. Олимлар -64</p>

                <p className="info__paragraph">Tel: 998(71)265-03-78</p>

                <p className="info__paragraph">
                  GUhydrouz@umail.uz <br />
                  <Link href="/">
                    <a>канцелярия</a>
                  </Link>
                </p>

                <p className="info__paragraph">
                  gidroingeo_uz@umail.uz <br />
                  <Link href="/">
                    <a>ученый секретарь</a>
                  </Link>
                </p>

                <p className="info__paragraph">hydrouz@exat.uz</p>

                <p className="info__paragraph">
                  Новостной канал в телеграмме <br />
                  <Link href="/">
                    <a>t.me/hydroengeo</a>
                  </Link>
                </p>

                <p className="info__paragraph">Месторасположение</p>
              </div>
            </div>
            <div className="contacts__map-wrapper">
              <iframe
                className="contacts__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.556764698082!2d69.3382117985232!3d41.34025061479173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4613538b033%3A0xd8f0b6655815a51f!2z0JPQoyAi0JjQvdGB0YLQuNGC0YPRgiDQk9CY0JTQoNCe0JjQndCT0JXQniI!5e0!3m2!1sru!2s!4v1642608995153!5m2!1sru!2s"
                width="924"
                height="717"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default contacts;
