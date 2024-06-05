import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'

function App() {


  return (
    <>
      {/* Header */}
      <Header />

      {/* Set up Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
