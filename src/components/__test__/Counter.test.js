import { fireEvent, render, screen } from '@testing-library/react'
import Counter from "../Counter"


describe("Counter component", ()=>{
    test("should display initial count", ()=>{
        render(<Counter initialCount={5}/>)
        const h3Element = screen.getByTestId(/count/i)
        expect(Number(h3Element.textContent)).toBe(5)
    });

    test("should increment the count by 1 if 'increment' button is clicked", ()=>{
        render(<Counter initialCount={2}/>)
        const incrementButtonElement = screen.getByRole("button", {name: /increment/i})
        const h3Element = screen.getByTestId(/count/i)
        fireEvent.click(incrementButtonElement);
        expect(Number(h3Element.textContent)).toEqual(3)
    })

    test("should decrement the count by 1 if 'decrement' button is clicked", ()=>{
        render(<Counter initialCount={10}/>)
        const decrementButtonElement = screen.getByRole("button", {
          name: /decrement/i,
        });
        const h3Element = screen.getByTestId(/count/i)
        fireEvent.click(decrementButtonElement);
        expect(Number(h3Element.textContent)).toEqual(9)
    })

    test("should reset the count by making it '0' if 'reset' button is clicked", ()=>{
        render(<Counter initialCount={-20}/>)
        const resetButtonElement = screen.getByRole("button", {
          name: /restart/i,
        });
        const h3Element = screen.getByTestId(/count/i)
        fireEvent.click(resetButtonElement);
        expect(Number(h3Element.textContent)).toEqual(0)
    })

    test("should multiply the count by -1 and make it switch signs if 'switchSigns' button is clicked", () => {
      render(<Counter initialCount={100} />);
      const switchSignsButtonElement = screen.getByRole("button", {
        name: /switch signs/i,
      });
      const h3Element = screen.getByTestId(/count/i);
      fireEvent.click(switchSignsButtonElement);
      expect(Number(h3Element.textContent)).toEqual(-100);
    });
})