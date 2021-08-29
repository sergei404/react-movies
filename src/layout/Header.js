const Header = () => {
  return (
    <nav className="green lighten-1">
      <div className="nav-wrapper">
        <a href="#s" className="brand-logo right">
          Movies
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="s">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
