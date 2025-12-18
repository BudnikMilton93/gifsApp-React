import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

    test('should initialize with default value 10', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
    });

    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        //La accion del hook al testearla va dentro de un act ya que esta cambiando el render
        act(() => result.current.handdleAdd());

        expect(result.current.counter).toBe(11);
    });

    test('should decrement counter when handleSubstract is called', () => {
        const { result } = renderHook(() => useCounter());

        //La accion del hook al testearla va dentro de un act ya que esta cambiando el render
        act(() => result.current.handdleSubstract());

        expect(result.current.counter).toBe(9);
    });

    test('should reset counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter());

        //La accion del hook al testearla va dentro de un act ya que esta cambiando el render
        act(() => result.current.handdleReset());

        expect(result.current.counter).toBe(10);
    })
});