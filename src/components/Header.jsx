import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="container navbar navbar-expand p-3">
                <ul className="navbar-nav gap-1 gap-sm-2 gap-md-3 gap-lg-4 gap-xl-5">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lab">Lab</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/playground">Playground</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vibes">Vibes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}