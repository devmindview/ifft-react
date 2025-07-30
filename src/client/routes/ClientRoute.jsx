import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ClientLayout from '../layout/ClientLayout'
import Form from '../pages/Form'

function ClientRoute() {
    return (
        <Routes>
            <Route element={<ClientLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<Form/>} />
            </Route>
        </Routes>
    )
}

export default ClientRoute