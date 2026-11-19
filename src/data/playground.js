import FLAPPYSQUARE from "/assets/gamebanners/flappysquare.png"
import SNAKE from "/assets/gamebanners/snake.png"
import HANGMAN from "/assets/gamebanners/hangman.png"

import KEYGEN from "/projects/key-generator/img/logo.png" 
import NUTRIENTS from "/projects/nutrients-calculator/logo.png" 
import PASSWORDGEN from "/projects/password-generator/logo.png" 
import CIRCLE from "/projects/random-circle/logo.svg" 

const games = [
{
    img: FLAPPYSQUARE,
    title: "Flappy Square",
    description: "Game inspired by flappy bird",
    url: "/games/holyflappysquare/index.html"
},
{
    img: SNAKE,
    title: "Snake",
    description: "Classic snake game",
    url: "/games/snake/index.html"
},
{
    img: HANGMAN,
    title: "Hangman",
    description: "Hangman game to play with your friend",
    url: "/games/hangman/index.html"
}
]

const projects = [
{
    img: KEYGEN,
    title: "Key Generator",
    url: "/projects/key-generator/index.html"
},
{
    img: NUTRIENTS,
    title: "Nutrients Calculator",
    url: "/projects/nutrients-calculator/index.html"
},
{
    img: PASSWORDGEN,
    title: "Password Generator",
    url: "/projects/password-generator/index.html"
},
{
    img: CIRCLE,
    title: "Random Circle",
    url: "/projects/random-circle/index.html"
},
]

export {games, projects}