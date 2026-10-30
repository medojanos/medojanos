import Project from "../components/Project"
import Banner from "../components/Banner"

import KEYGEN from "/projects/key-generator/img/logo.png"
import NUTRIENTS from "/projects/nutrients-calculator/logo.png"
import PASSWORD from "/projects/password-generator/logo.png"
import CIRCLE from "/projects/random-circle/logo.svg"

export default function Projects() {
  return (
    <>
      <Banner id="projects"/>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 mx-auto g-5">
          <Project name="Vektor" url="https://vektor.meadowhub.net/" img="https://vektor.meadowhub.net/favicon.svg" description="Route planner."/>
          <Project name="MaxxedOut" url="https://maxxedout.meadowhub.net/" img="https://maxxedout.meadowhub.net/favicon.svg" description="Workout tracker."/>
          <Project name="Password Generator" url="/projects/password-generator/index.html" img={PASSWORD} description="You can generate strong passwords."/>
          <Project name="Key Generator" url="/projects/key-generator/index.html" img={KEYGEN} description="A random-key generator."/>
          <Project name="Nutrients Calculator" url="/projects/nutrients-calculator/index.html" img={NUTRIENTS} description="Calculate your micro nutrient needs."/>
          <Project name="Random Circle" url="/projects/random-circle/index.html" img={CIRCLE} description="It's a black circle going around."/>
        </div>
      </div>
    </>
  )
}