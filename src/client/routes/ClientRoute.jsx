import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ClientLayout from '../layout/ClientLayout'
import Form from '../pages/Form'
import About from '../pages/About'
import TwentyIfft from '../pages/TwentyIfft'

import Kottaka from '../pages/Kottaka'
import PolicyAndTerms from '../policy/PolicyAndTerms'
import Isff2025 from '../pages/Isff2025'
import Ifff9 from '../pages/Ifff9'


function ClientRoute() {
    return (
        <Routes>
            <Route element={<ClientLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/form' element={<Form />} />
                <Route path='/twenty-ifft' element={<TwentyIfft />} />
                 <Route path='/isff-2025' element={<Isff2025/>} />
                <Route path='/ifff-9th' element={<Ifff9/>} />
                <Route path='/kottaka' element={<Kottaka/>} />
                <Route path='/privacy-and-terms' element={<PolicyAndTerms/>} />
            </Route>
        </Routes>
    )
}

export default ClientRoute