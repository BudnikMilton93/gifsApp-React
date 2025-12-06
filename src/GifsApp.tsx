import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

     const {previousTerms, searchResultGif, handleSearch, handleTermClicked } = useGifs();

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
            <GifsList gifs = {searchResultGif} />

        </>
    )
}
