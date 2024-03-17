// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Homepage/HomePage";
import { Year1Page } from "../Pages/Year1/Year1";
function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />} />
        <Route
          path="/Year1"
          element={<Year1Page />} />
      </Routes>
    </Router>
  )
}

export default App
