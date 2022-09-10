import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__menu">
        <section className="header__menu--section1">
          <a href="#linkToAbout" className="header__menu--link">
            about
          </a>
          <a href="#linkToSkills" className="header__menu--link">
            skills
          </a>
          <a href="#linkToProjects" className="header__menu--link">
            proyectos
          </a>
          <a href="#linkToContact" className="header__menu--link">
            contacto
          </a>
        </section>
        <section className="header__menu--section2">
          <a
            href="https://arandiez.com/"
            className="header__menu--linko header__menu--language"
          >
            english
          </a>
        </section>
      </nav>
    </header>
  );
};

export default Header;
