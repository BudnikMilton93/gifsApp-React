import { useRef, useState } from "react";
import type { Gif } from "../../gifs/interfaces/gif.interface";
import { getGifsByQuery } from './../actions/get-gifs-by-query.action';


export const useGifs = () => {

    // Uso de UseState
    // El useState tiene: una constante (primer valor) es lo que se muestra en pantalla, 
    // la función para actualizar esta variable (segundo valor)
    // y por último el estado inicial  (tercer valor)
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [searchResultGif, setSearchResultGifs] = useState<Gif[]>([]);

    //useRef: Nos crea un espacio en memoria
    //No causa renders y mantiene el estado a lo largo del ciclo de vida
    const gifCache = useRef<Record <string, Gif[]> > ({});
    
    const handleTermClicked = async (term: string) => {
        if (gifCache.current[term]) {
            setSearchResultGifs(gifCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setSearchResultGifs(gifs);
    }

    const handleSearch = async (query: string = '') => {

        const term = query.trim().toLocaleLowerCase();

        if (term.length === 0) return;

        if (previousTerms.includes(term)) return;
        setPreviousTerms([term, ...previousTerms].splice(0, 8));

        //Petición HTTP
        const gifs = await getGifsByQuery(term);

        setSearchResultGifs(gifs);

        gifCache.current[term] = gifs;
    }

    return {
        //Properties
        previousTerms,
        searchResultGif,
        handleSearch,
        handleTermClicked

    }
}

