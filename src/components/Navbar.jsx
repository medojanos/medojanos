import { Link, NavLink } from "react-router-dom"
import LOGO from "/logo_light.svg"

export default function Navbar() {
    return (
        <div className="pt-2 mx-2 gap-2 d-flex align-items-center justify-content-center sticky-top">
            <Link to="/" className="flex-shrink-0">
                <img className="expanding" src={LOGO} width={60}/>
            </Link>
            <nav className="navbar navbar-dark bg-dark rounded-4">
                <div className="navbar-nav flex-row flex-wrap justify-content-center px-2 px-md-3 px-lg-4 gap-2 gap-md-3 gap-lg-4">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/games">Games</NavLink>
                    <NavLink className="nav-link" to="/servers">Servers</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </div>
            </nav>
        </div>
    )
}