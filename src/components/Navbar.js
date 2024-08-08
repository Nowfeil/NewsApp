import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';
const Navbar =(props)=> {
  const images=[
    'https://cdn-icons-png.flaticon.com/128/11457/11457488.png',
    'https://cdn-icons-png.flaticon.com/128/7645/7645197.png'
  ]
    return (
        <nav className={`navbar fixed-top navbar-expand-lg bg-body-dark navbar-${props.theme} text-bg-${props.theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/about">About</Link> </li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/buisness">Buisness</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/games">Games</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
            </ul>
          </div>
        </div>
        <button type="button" onClick={props.mode} className="btn"><img src={props.theme==='dark'?images[0]:images[1]} className="img-fluid" alt="..." width={'25px'} height={'25px'}/></button>
      </nav>
    )
}
export default Navbar