const Footer = () => {
  return (
    <footer className="page-footer green lighten-3">
      <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text" href="#!">
          Repo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
