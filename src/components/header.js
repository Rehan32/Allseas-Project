import './header.css'

const Header=()=>{
  return(
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand me-auto" href="#">
      <img src="./images/Capture.png" height="105"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" id="active" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SERVICES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ACHIEVEMENTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CAREER</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT US</a>
          </li>
        </ul>
          <button className="btn btn-outline-success ms-auto" type="submit"><i className="bi bi-whatsapp"></i>WhatsApp</button>
      </div>
    </div>
  </nav>
  )
}

export default Header;