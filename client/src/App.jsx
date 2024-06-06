import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Gallery from './views/Gallery.jsx'
import Reviews from './views/Reviews.jsx'
import Register from './views/Register.jsx'

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

        {/* Gallery */}
        <Route path='/gallery' element={<Gallery />} />

        {/* Reviews */}
        <Route path='/reviews' element={<Reviews />} />

        {/* Register */}
        <Route path='/register' element={<Register />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
