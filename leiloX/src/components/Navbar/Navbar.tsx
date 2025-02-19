import "./Navbar.css"
import logoFigma from "../../assets/images/logoFigma.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={logoFigma} alt="LeiloX Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          <a href="#">INICIO</a>
          <a href="/imovel">IMOVEIS</a>
          <a href="#">LANCES</a>
        </div>
      </div>
      <div className="user">
        <a href="#" className="logout">
          SAIR
        </a>
        <span className="username">VINICIUS</span>
      </div>
    </nav>
  )
}

