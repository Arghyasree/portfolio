import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Publications from './pages/Publications'
import Research from './pages/Research'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="research" element={<Research />} />
        <Route path="publications" element={<Publications />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
