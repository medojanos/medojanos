import Game from "../components/PlaygroundGame";
import Project from "../components/PlaygroundProject";
import { games, projects } from "../data/playground";

export default function Playground() {
  return (
    <>
      <section className="container">
        <div className="main-box p-5">
          <p className="text-accent">PLAYGROUND</p>
          <h1>Games & mini projects</h1>
          <p className="text-secondary">Browser games and small web utilities</p>
        </div>
      </section>
      <section className="container">
        <p>Games</p>
        <hr/>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
          {
            games.map((game, index) => (
              <Game key={index} img={game.img} title={game.title} description={game.description} url={game.url}/>
            ))
          }
        </div>
      </section>
      <section className="container mb-5">
        <p>Mini projects</p>
        <hr/>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {
            projects.map((project, index) => (
              <Project key={index} img={project.img} title={project.title} url={project.url}/>
            ))
          }
        </div>
      </section>
    </>
  )
}