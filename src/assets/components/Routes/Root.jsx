import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {/* child component */}
            <Outlet/>
        </main>
        <footer>@2024 My website</footer>
    </div>
  )
}

export default Root