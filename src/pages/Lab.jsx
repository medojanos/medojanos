import { projects } from "../data/lab"
import Project from "../components/LabProject"

export default function Lab() {
  return (
    <>
      <section className="container section">
        <p className="text-accent">LAB</p>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Projects</h1>
            <p className="text-secondary">My software engineering projects</p>
          </div>
          <div className="d-flex align-items-center">
            <a href="https://github.com/medojanos" target="_blank">GitHub</a>
          </div>
        </div>
      </section>
      <section className="container section">
        {
          projects.map((project, index) => (
            <Project key={index} project={project}/>
          ))
        }
      </section>
    </>
  )
}