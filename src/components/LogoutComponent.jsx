import React from 'react'
import { Link } from 'react-router-dom'

const LogoutComponent = () => {
    return (
        <div>
            <Link
                to="/"
                className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-center"
                onClick={() => localStorage.clear()}
            >
                Logout
            </Link>
        </div>
    )
}

export default LogoutComponent