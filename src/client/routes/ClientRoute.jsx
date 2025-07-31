import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ClientLayout from '../layout/ClientLayout'
import Form from '../pages/Form'
import About from '../pages/About'

function ClientRoute() {
    return (
        <Routes>
            <Route element={<ClientLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About/>} />
                <Route path='/form' element={<Form/>} />
            </Route>
        </Routes>
    )
}

export default ClientRoute