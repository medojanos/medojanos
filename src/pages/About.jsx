import { useEffect } from "react"
import Banner from "../components/Banner"

export default function About() {
  useEffect(() => {
    async function fetchReadme() {
      const url = "https://raw.githubusercontent.com/medojanos/medojanos/refs/heads/main/README.md";
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text()
        document.getElementById("readme").innerHTML = text.slice(text.search("<!--About-->"), text.search("<!--/About-->"))
      } else document.getElementById("readme").innerHTML = "<p>Failed to fetch readme</p>"
    }
    fetchReadme();
  }, [])
  return (
    <>
      <Banner id="about"/>
      <section className="pt-5" id="readme"></section>
    </>
  )
}