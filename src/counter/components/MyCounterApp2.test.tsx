import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handdleAddMock = vi.fn();
const handdleSubstractMock = vi.fn();
const handdleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handdleAdd: handdleAddMock,
        handdleReset: handdleSubstractMock,
        handdleSubstract: handdleResetMock
    }),
}));

describe('MyCounterAppp2', () => {

    test('should render the component', () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter = 20`);
    });

    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp />);
        const button = screen.getByRole('button', { name: '+1' });
        fireEvent.click(button);
        
        expect(handdleAddMock).toHaveBeenCalled();
    });
});