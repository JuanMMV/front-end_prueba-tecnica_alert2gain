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
                className="px-5 py-5 bg-red-800 hover:bg-red-600 text-white rounded-lg me-0 lg:me-10 shadow-xl"
                onClick={() => handleLogout()}
            >
                <span className='font-semibold text-lg'>Cerrar Sesión</span>
            </Link>
        </div>
    )
}

export default LogoutComponent