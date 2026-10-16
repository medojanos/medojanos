import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Servers from './pages/Servers'
import Games from './pages/Games'
import Socials from './pages/Socials'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/games" element={<Games />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
