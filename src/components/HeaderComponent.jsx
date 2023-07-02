import React from 'react'
import LogoutComponent from './LogoutComponent'

const HeaderComponent = () => {
    return (
        <header className='border-b border-solid border-slate-700 p-8 flex w-full items-center justify-end bg-gray-800 shadow-2xl'>
            <LogoutComponent />
        </header>
    )
}

export default HeaderComponent