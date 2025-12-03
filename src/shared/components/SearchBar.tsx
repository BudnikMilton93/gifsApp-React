import React, { useEffect, useState, type ChangeEvent, type KeyboardEvent } from 'react';

interface Props {
    placeHolder?: string;
    onQuery: (query: string) => void;
}


// Desestructuramos las props que recibe el componente.
// placeHolder tiene un valor por defecto ("Buscar")
// onQuery es la función que el padre ejecuta cuando se hace la búsqueda
export const SearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {

    // Estado local donde guardamos lo que escribe el usuario
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Cada vez que "query" cambia, programamos un temporizador (debounce)
        // La función onQuery(query) se ejecutará recién después de 700 ms
        const timeoutId = setTimeout(() => { onQuery(query); }, 700);

        // Esta función se ejecuta ANTES de que el useEffect vuelva a correr
        // (o cuando el componente se desmonta)
        // Limpia el timeout anterior para evitar ejecutar búsquedas innecesarias.
        return () => { clearTimeout(timeoutId) }; // Cancelamos el temporizador anterior

    }, [query, onQuery]);
    // El efecto (useEfect) se re-ejecuta cada vez que "query" cambia
    // o cuando cambia la función onQuery (casi nunca)

    // Ejecuta la búsqueda y luego limpia el input
    const handleSearch = () => {
        onQuery(query); // Le pasamos el texto al padre
    };

    // Si el usuario presiona Enter → hacemos la búsqueda
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeHolder}  // Texto guía
                value={query} // Valor controlado por React
                onChange={(event) => setQuery(event.target.value)} // Cada teclazo actualiza el estado
                onKeyDown={handleKeyDown} // Enter dispara la búsqueda
            />

            <button onClick={handleSearch}> Buscar </button>
        </div>
    )
}
