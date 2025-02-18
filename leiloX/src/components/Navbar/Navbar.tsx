import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <span>LEI</span>
          <span className="gray">L</span>
          <span className="gray-light">O</span>
          <span className="gray">X</span>
        </div>
        <div className="nav-links">
          <a href="#">INICIO</a>
          <a href="#">IMOVEIS</a>
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

