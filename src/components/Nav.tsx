const Nav = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          Khaled Muwahed
        </a>

        <nav className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
