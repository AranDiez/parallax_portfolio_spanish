import '../styles/components/Section4.scss';

const Section4 = (props) => {
  return (
    <section className="section4" id="linkToProjects">
      <h2 className="section4__title">proyectos</h2>
      <div className="section4__boxes">
        <a
          href="https://photojournalism.arandiez.com/"
          target="_blank"
          class="section4__box1"
        >
          <h3 className="section4__boxtitle section4__boxtitle1">REACT</h3>
          <p className="section4__boxparagraph section4__boxparagraph1">
            Proyecto responsive usando la librería de React e implementando
            Sass, Bootstrap y React Router DOM.
          </p>
        </a>
        <a
          href="https://javascriptgame.arandiez.com/"
          target="_blank"
          class="section4__box2"
        >
          <h3 className="section4__boxtitle">JAVASCRIPT</h3>
          <p className="section4__boxparagraph">
            Un pequeño juego utilizando Javascript y animaciones en css.
          </p>
        </a>
        <a
          href="https://reactthirdapi.arandiez.com/"
          target="_blank"
          class="section4__box3"
        >
          <h3 className="section4__boxtitle">API</h3>
          <p className="section4__boxparagraph">
            Proyecto realizado con Javascript en react usando APIs de terceros.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Section4;
