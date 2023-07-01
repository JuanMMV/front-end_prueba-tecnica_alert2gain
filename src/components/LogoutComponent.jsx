import React from 'react'
import { Link } from 'react-router-dom'
import ToastComponent from './ToastComponent'

const LogoutComponent = () => {

    const handleLogout = () => {
        localStorage.clear()
        ToastComponent({textData: "Sesion cerrada con exito"})
    }

    return (
        <div>
            <Link
                to="/"
                className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-center"
                onClick={() => handleLogout()}
            >
                Logout
            </Link>
        </div>
    )
}

export default LogoutComponent