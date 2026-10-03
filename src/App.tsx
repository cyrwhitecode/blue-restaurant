import './styles/App.css'
import { Home } from './pages/home.tsx'
import { Header } from './components/header.tsx'
import { Footer } from './components/footer.tsx'
import { useEffect, useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const style = ():string => {
    if (isOpen) {
      return 'mobile-links open-menu'
    } else {
      return 'mobile-links close-menu'
    }
  }
  const toggle = ():void => {
    setIsOpen(!isOpen)
  }
  
  const [active, setActive] = useState<string>("/")
  
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <div  className='app-container'>
      <header>
        <Header active={active} setActive={setActive} style={style} toggle={toggle} />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
