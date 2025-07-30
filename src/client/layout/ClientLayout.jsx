import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function ClientLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
        {/* Header */}
        <Header/>
        
        <main className='flex-grow mx-auto w-full'>
            <Outlet/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default ClientLayout