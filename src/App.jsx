import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ClientRoute from "./client/routes/ClientRoute"
import NotFound from "./shared/pages/NotFound"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<ClientRoute />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
