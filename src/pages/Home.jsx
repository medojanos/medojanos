import {Link} from "react-router-dom"
import { pages } from "../data/home"

export default function Home() {
  return (
    <>
      <section className="container justify-content-between align-content-between flex-wrap">
        <div className="row">
          <div className="col">
            <h1>MeadowHub</h1>
            <Link to=""></Link>
          </div>
          <div className="col">
            <h2>What can you find?</h2>
            <p>Everything that I am involved online.</p>
          </div>
        </div>
      </section>
      <section className="container section mb-5">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {
            pages.map((page, index) => (
              <div key={index} className="col">
                <Link to={page.url} target={page.title == "Social" ? "_blank" : "_self"}>
                  <div className={`${page.layoutClass} h-100`}>
                    <div className={`${page.boxClass} section p-3 m-0 h-100`}>
                      <h3>{page.title}</h3>
                      <span className="text-accent">{page.description}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}