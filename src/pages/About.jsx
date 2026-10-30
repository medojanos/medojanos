import { useEffect, useState } from "react"
import Banner from "../components/Banner"

export default function About() {
  const [readme, setReadme] = useState("");
  useEffect(() => {
    async function fetchReadme() {
      const url = "https://raw.githubusercontent.com/medojanos/medojanos/refs/heads/main/README.md";
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text()
        setReadme(text.slice(text.search("<!--About-->"), text.search("<!--/About-->")))
      } else setReadme("<p>Failed to fetch readme</p>")
    }
    fetchReadme();
  }, [])
  return (
    <>
      <Banner id="about"/>
      <section className="pt-5" dangerouslySetInnerHTML={{__html: readme}}></section>
    </>
  )
}