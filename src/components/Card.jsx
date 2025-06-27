import React from 'react';
import { Link } from 'react-router-dom';

function Card({ movieData }) {
    const { id, images, title, rating, description } = movieData;
    const image = images?.[0];

    return (
        <div className="w-64 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03]">
            <img
                className="w-full h-32 object-cover transition-all duration-500 ease-in-out"
                src={image}
                alt={title}
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
                <p className="text-sm text-gray-500 mt-1">⭐ {rating}</p>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{description}</p>
                
                <Link to={`/card/${id}`}>
                    <button className="mt-3 w-full text-sm px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
