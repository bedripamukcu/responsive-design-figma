import "./Navbar.css"
import menuicon from "../../assets/MenuIcon.svg"
import closeicon from "../../assets/Vector.png"
const Navbar = () => {
  return (
    <>
    <nav>
      <a href="#" className="logo">
        Sound <span className="red">Dzign </span></a>
        <ul>
        <li>
        <a href="#topics"> About</a>
      </li>
      <li>
        <a href="#info"> Course Details</a>
      </li>
      <li>
        <a href="#blog"> Blog</a>
      </li>
      <li>
        <a href="#testimonials"> Testimonials</a>
      </li>

        </ul>

        <div className="menu-icon">
          <img src={menuicon} alt="" />
        </div>
    </nav>
    <div className="mobile-menu-container">
    <div className="close-icon">
      <img src={closeicon} alt="" />
    </div>
    <ul className="menu-items">
      <li>
        <a href="#topics"> About</a>
      </li>
      <li>
        <a href="#info"> Course Details</a>
      </li>
      <li>
        <a href="#blog"> Blog</a>
      </li>
      <li>
        <a href="#testimonials"> Testimonials</a>
      </li>

        </ul>
    </div>
    </>
  )
}

export default Navbar