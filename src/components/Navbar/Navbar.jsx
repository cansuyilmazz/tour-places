import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="links">
        <a href="#about">About Us</a>
        <a href="#foryou">For You</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#vlog">Vlog</a>
        <a href="#contact">Contact</a>
      </ul>
    </div>
  );
};

export default Navbar;
