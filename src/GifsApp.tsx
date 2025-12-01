import React from 'react'
import { mockGifs } from './mock-data/gifs.mocks'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto'/>

            {/* Search */}
            <SearchBar placeHolder='Busca lo que quieras...'/>

            {/* Busquedas previas */}
            <PreviousSearches/>          

            {/* GIFS */}
            <GifsList gifs = { mockGifs } />
            
        </>
    )
}
