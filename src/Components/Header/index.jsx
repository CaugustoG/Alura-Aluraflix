import { Link } from "react-router-dom"

import "./Header.css"
import Boton from "../Boton"

function Header() {
    return <header className="header">
        <img src="/img/header-banner.jpeg" alt="mujer indigena" className="banner" />
        <img src="/img/LogoMain.png" alt="logo" className="logo"/>
        <div className="titulo">
            <h2>Descubre los paisajes mas hermosas e impactantes del universo</h2>
        </div>
        <nav>
            <span>
                <Link to="/Nuevo-video"><Boton texto="Nuevo video" /></Link>
                <Link to="/videos"><Boton texto="videos"/></Link>
            </span>  
        </nav>
    </header>
}

export default Header