import React from 'react'

const CardComponent = ({ image, fleet, name }) => {
    return (
        <div className="max-w-sm border rounded-lg bg-gray-800 border-gray-700  m-5 cursor-pointer shadow-lg">
            <img className="rounded-t-lg" src={image} alt="image" />

            <div className="p-5">
                <h1 className="mb-2 text-lg font-bold text-white text-center">{name}</h1>
                <span className="mb-3 text-white">{fleet}</span>
            </div>
        </div>
    )
}

export default CardComponent