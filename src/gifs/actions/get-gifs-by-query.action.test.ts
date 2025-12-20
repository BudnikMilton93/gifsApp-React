import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import axios from "axios";

describe('getGifsByQuery', () => {
    const mock = new AxiosMockAdapter(giphyApi);

    // test('should return a list of gifs', async () => {
    //      const gifs = await getGifsByQuery('Goku');
    //     const [gif1] = gifs;
    //     expect(gifs.length).toBe(10);
    //     expect(gif1).toEqual({
    //          id: expect.any(String),
    //          height: expect.any(Number),
    //          width: expect.any(Number),
    //          title: expect.any(String),
    //          url: expect.any(String),
    //      });
    //     console.log(gif1);
    // });

    
});