import "./Header.css"

function Header() {
    return <header className="header">
        <img src="/img/header-banner.jpeg" alt="mujer indigena" />
        <img src="/img/LogoMain.png" alt="logo" className="logo"/>
        <div className="titulo">
            <h2>Descubre los paisajes mas hermosas e impactantes del universo</h2>
        </div>
    </header>
}

export default Header