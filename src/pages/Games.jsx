import Game from "../components/Game"

import SNAKE from "/assets/gamebanners/snake.png"
import SQUARE from "/assets/gamebanners/flappysquare.png"
import HANGMAN from "/assets/gamebanners/hangman.png"
import Banner from "../components/Banner"

export default function Games() {
  return (
    <>
      <Banner id="games"/>
      <section className="pt-5">
        <Game name="Snake" img={SNAKE} description="Classic snake game"></Game>
        <Game name="Holy Flappy Square" img={SQUARE} description="Game inspired by flappy bird with a little change in visuals"></Game>
        <Game name="Hangman" img={HANGMAN} description="Hangman game to play with your friends" imagePos="50% 0"></Game>
      </section>
    </>
  )
}