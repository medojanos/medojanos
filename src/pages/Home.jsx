import { Link } from "react-router-dom"

import "../styles/home.css"

export default function Home() {
  return (
    <>
      <div id="hero">
        <p id="title">Meadow<span>Hub</span></p>
        <div>
          <a href="#discover"><ion-icon name="arrow-down-circle"></ion-icon></a>
        </div>
      </div>
      <nav id="discover">
        <div className="container text-center">
          <h2 className="mb-5">Discover</h2>
          <div className="row">
            <div className="col">
              <Link to="/projects"><ion-icon name="code" className="expanding"/></Link>
              <p>Projects</p>
            </div>
            <div className="col">
                <Link to="/games"><ion-icon name="game-controller" className="expanding"/></Link>
                <p>Games</p>
            </div>
            <div className="col">
                <Link to="/servers"><ion-icon name="cloud" className="expanding"/></Link>
                <p>Servers</p>
            </div>
            <div className="col">
                <Link to="/socials"><ion-icon name="share-social" className="expanding"/></Link>
                <p>Socials</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col">
            <h1>What is MeadowHub?</h1>
          </div>
          <div className="col">
            <p>It is my personal website where I collect and present my projects or give status about my own running servers.<br/>
              It functions as a simple central page for everything I’m involved in online. I use it to display what I’m building, what I’m working on, and where my other content and profiles can be found.</p>
          </div>
        </div>
      </div>
    </>
  )
}