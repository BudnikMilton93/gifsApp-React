import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";


describe('useGifs', () => {

    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.searchResultGif.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleTermClicked).toBeDefined();
    });

    test('should a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('Goku');
        });

        expect(result.current.searchResultGif.length).toBe(10);
    });

    test('should return a list of gifs when handleTermClicked called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('Goku');
        });

        expect(result.current.searchResultGif.length).toBe(10);

    });

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('Goku');
        });

        expect(result.current.searchResultGif.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('Esto es un error'));

        await act(async () => {
            await result.current.handleTermClicked('Goku');
        });

        expect(result.current.searchResultGif.length).toBe(10);
    });

    test('should return no more than 8 previous term', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('Goku1');
        });
        await act(async () => {
            await result.current.handleSearch('Goku2');
        });
        await act(async () => {
            await result.current.handleSearch('Goku3');
        });
        await act(async () => {
            await result.current.handleSearch('Goku4');
        });
        await act(async () => {
            await result.current.handleSearch('Goku5');
        });
        await act(async () => {
            await result.current.handleSearch('Goku6');
        });
        await act(async () => {
            await result.current.handleSearch('Goku7');
        });
        await act(async () => {
            await result.current.handleSearch('Goku8');
        });

        expect(result.current.previousTerms.length).toBe(8);
    });
});