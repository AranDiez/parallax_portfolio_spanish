import '../styles/components/Section2.scss';
import { FaDownload } from 'react-icons/fa';

const Section2 = (props) => {
  return (
    <section className="section2" id="linkToAbout">
      <h2 className="section2__title">ABOUT</h2>
      <p className="section2__boxparagraph1">
        ¡Hola! Soy Aran Díez, licenciada en fotografía digital, diseño web y
        programadora front-end.
      </p>
      <p className="section2__boxparagraph2">
        Durante mi experiencia profesional he trabajado como fotógrafa y
        creadora de contenido gráfico, así como diseño y retoque digital. Mi
        interés en el mundo digital y el desarrollo de producto final me
        llevaron a dar el salto y convertirme en diseñadora web.
      </p>
      <p className="section2__boxparagraph2">
        Mi objetivo es formar parte de un equipo de diseñadores con el fin de
        aprender tanto como sea posible y a la vez ofrecer lo mejor de mis
        habilidades. Soy una persona creativa y empática, con un gusto por la
        armonía y lo estético. Además tengo un buen análisis lógico y una gran
        dedicación.
      </p>
      <div className="section2__download">
        <h2 className="section2__download--title">VER CV COMPLETO</h2>
        <a
          href="https://drive.google.com/file/d/1VwYDINSs2sJGANsGI15Mz8lz6gS_xm2m/view?usp=sharing"
          target="_blank"
          className="section5__icon1"
          className="section2__download--icon"
        >
          <FaDownload className="section2__download--icondown" />
        </a>
      </div>
    </section>
  );
};

export default Section2;
