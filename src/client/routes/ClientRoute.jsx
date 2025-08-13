import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ClientLayout from '../layout/ClientLayout'
import Form from '../pages/Forms/Form'
import About from '../pages/About'
import TwentyIfft from '../pages/TwentyIfft'

import Kottaka from '../pages/Kottaka'
import PolicyAndTerms from '../policy/PolicyAndTerms'
import Isff2025 from '../pages/Isff2025'
import Ifff9 from '../pages/Ifff9'
import ScrollToTop from '../components/ScrollToTop'
import Contact from '../pages/Contact'
import AsianForm from '../pages/Forms/AsianForm'
import IndianForm from '../pages/Forms/IndianForm'
import MalayalamForm from '../pages/Forms/MalayalamForm'


function ClientRoute() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route element={<ClientLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    {/* Form */}
                    <Route path='/form' element={<Form />} />
                    <Route path='/form-asian' element={<AsianForm />} />
                    <Route path='/form-indian' element={<IndianForm/>} />
                    <Route path='/form-malayalam' element={<MalayalamForm/>} />
                    <Route path='/twenty-ifft' element={<TwentyIfft />} />
                    <Route path='/isff-2025' element={<Isff2025 />} />
                    <Route path='/ifff-9th' element={<Ifff9 />} />
                    <Route path='/kottaka' element={<Kottaka />} />
                    <Route path='/privacy-and-terms' element={<PolicyAndTerms />} />
                    <Route path='/contact-us' element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default ClientRoute