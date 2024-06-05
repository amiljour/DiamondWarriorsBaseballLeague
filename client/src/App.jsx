import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home.jsx'
import Header from './components/Header.jsx'

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
    </>
  )
}

export default App
