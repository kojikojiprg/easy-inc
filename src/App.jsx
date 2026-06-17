import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Business from './pages/Business'
import Careers from './pages/Careers'
import Results from './pages/Results'
import Team from './pages/Team'
import Religion from './pages/Religion'
import Shisha from './pages/Shisha'
import NewsList from './pages/NewsList'
import NewsArticle from './pages/NewsArticle'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/easy-inc">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index          element={<Home />} />
          <Route path="about"    element={<About />} />
          <Route path="business" element={<Business />} />
          <Route path="careers"  element={<Careers />} />
          <Route path="results"  element={<Results />} />
          <Route path="team"     element={<Team />} />
          <Route path="religion" element={<Religion />} />
          <Route path="shisha"   element={<Shisha />} />
          <Route path="news"     element={<NewsList />} />
          <Route path="news/:id" element={<NewsArticle />} />
          <Route path="*"        element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
