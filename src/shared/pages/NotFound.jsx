import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found </h1>
    <p className="text-lg mb-4">Oops! We couldn't find that page.</p>
    <Link to="/" className="text-blue-500 underline">Go back home</Link>
  </div>
  )
}

export default NotFound