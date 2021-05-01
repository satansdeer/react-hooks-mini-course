import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

describe("increment", () => {
  it("increments count by 1", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});

describe("decrement", () => {
  it("decrements count by 1", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
