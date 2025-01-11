
import './App.css'
import About from './components/About'
import Explore from './components/Explore'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Story from './components/Story'

function App() {

  return (
    <main className='relative min-h-screen w-screen'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Explore/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Footer/>
    </main>
  )
}

export default App
