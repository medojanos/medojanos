import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Lab from './pages/Lab'
import Playground from './pages/Playground'
import Vibes from './pages/Vibes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout theme="home"> <Home /></Layout>} />
        <Route path="/lab" element={<Layout theme="lab"> <Lab /></Layout>} />
        <Route path="/playground" element={<Layout theme="playground"> <Playground /></Layout>} />
        <Route path="/vibes" element={<Layout theme="vibes"> <Vibes /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
