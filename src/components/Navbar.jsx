import {Link, NavLink} from "react-router-dom"
import LOGO from "/logo_light.svg"

export default function Navbar() {
    return (
        <div className="pt-1 mt-3 d-flex gap-2 align-items-center justify-content-center sticky-top">
            <Link to="/"><img className="expanding" src={LOGO} width={60}/></Link>
            <nav className="navbar d-inline-flex navbar-dark bg-dark px-3 rounded-4">
                <div className="navbar-nav flex-row gap-3">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/games">Games</NavLink>
                    <NavLink className="nav-link" to="/servers">Servers</NavLink>
                    <NavLink className="nav-link" to="/socials">Socials</NavLink>
                </div>
            </nav>
        </div>
    )
}