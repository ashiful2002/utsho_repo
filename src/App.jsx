import React from 'react'
import './App.css'


import Container from 'react-bootstrap/Container';
import Header from './components/navigation/Header'
import AboutMe from './components/Main/AboutMe'
import Footer from './components/navigation/Footer';
function App() {


  return (
    <>
      <Container>

        {/* heading Starts */}
        <header>
          <Header />
        </header>
        {/* main Starts */}
        <main>
          <AboutMe />
        </main>
        {/* footer Starts */}
        <footer>
          < Footer />
        </footer>
      </Container>

    </>
  )
}

export default App
