import { ConfigProvider } from 'antd'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c4848a',
          colorLink: '#c4848a',
          fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
          borderRadius: 12,
        },
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer/>
    </ConfigProvider>
  )
}

export default App