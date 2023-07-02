import React from 'react'

const ButtonGroupComponent = ({setSelectFleet}) => {
    return (
        <div className="inline-flex rounded-md shadow-xl bg-gray-700 m-10" role="group">
            <button
                type="button"
                className="px-4 py-2 font-medium text-white border rounded-l-lg focus:bg-green-700"
                onClick={() => setSelectFleet(null)}
            >
                All
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border-t border-b border-r focus:bg-green-700"
                onClick={() => setSelectFleet(1)}
            >
                Flota 1
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border-t border-b border-r focus:bg-green-700"
                onClick={() => setSelectFleet(2)}
            >
                Flota 2
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border-t border-b border-r focus:bg-green-700"
                onClick={() => setSelectFleet(3)}
            >
                Flota 3
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border-t border-b border-r focus:bg-green-700"
                onClick={() => setSelectFleet(4)}
            >
                Flota 4
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border-t border-b focus:bg-green-700"
                onClick={() => setSelectFleet(5)}    
            >
                Flota 5
            </button>
            <button 
                type="button" 
                className="px-4 py-2 font-medium text-white border rounded-r-md focus:bg-green-700"
                onClick={() => setSelectFleet(6)}
            >
                Flota 6
            </button>
        </div>
    )
}

export default ButtonGroupComponent