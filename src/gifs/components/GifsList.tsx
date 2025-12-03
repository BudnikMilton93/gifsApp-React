import React, { type FC } from 'react';
import type { Gif } from '../interfaces/gif.interface';

interface Props {
    gifs: Gif[];
}

export const GifsList: FC<Props> = ({ gifs }) => {
    return (
        <div className='gifs-container'>
            {
                // Al iterar el mock con el map, devuelvo un div completo
                gifs.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3> {gif.title} </h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
