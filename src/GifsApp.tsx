import React, { useState } from 'react';
import type { Gif } from "../src/gifs/interfaces/gif.interface";
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';

export const GifsApp = () => {

    // El useState tiene: una constante (primer valor) es lo que se muestra en pantalla, 
    // la función para actualizar esta variable (segundo valor)
    // y por último el estado inicial  (tercer valor)
    const [previousTerms, setPreviousTerms] = useState<string[]> ([]);
    const [searchResultGif, setSearchResultGifs] = useState<Gif[]> ([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        
        const term = query.trim().toLocaleLowerCase();
        
        if (term.length === 0) return;
        
        if (previousTerms.includes(term)) return;
        setPreviousTerms([term, ...previousTerms].splice(0,8));

        //Petición HTTP
       const gifs =  await getGifsByQuery(term);

       setSearchResultGifs(gifs);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Search */}
            <SearchBar 
                placeHolder = 'Busca lo que quieras...'
                onQuery = {handleSearch} 
            />

            {/* Busquedas previas */}
            <PreviousSearches
                searches = {previousTerms}
                onLabelClicked = {handleTermClicked}
            />

            {/* GIFS */}
            <GifsList gifs={searchResultGif} />

        </>
    )
}
