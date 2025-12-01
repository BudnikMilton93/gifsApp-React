import React from 'react';

interface Props {
    placeHolder?: string;
}


export const SearchBar = ({placeHolder = 'Buscar' } : Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder = { placeHolder } />
            <button> Buscar </button>
        </div>
    )
}
