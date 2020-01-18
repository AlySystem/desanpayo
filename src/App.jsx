import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from './components/Navbar'
import PageLoading from './pages/PageLoading'
import Footer from './components/Footer'
import Support from './components/Support'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
      <Support />
    </Suspense>
  )
}

export default App
