import { act, renderHook } from "@testing-library/react-hooks";
import { usePokemon } from "./usePokemon";

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe("usePokemon", () => {
  it("fetches pokemon by the url constructed from pokemonName", async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => usePokemon("pikachu")));

    expect(global.fetch).toBeCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
  });

  describe("while fetching data", () => {
    it("handles loading state correctly", async () => {
      const { deferred, promise } = getControlledPromise();

      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(usePokemon);

      expect(result.current.isLoading).toBe(true);
      deferred.resolve();

      await waitForNextUpdate();
      expect(result.current.isLoading).toBe(false);
    });
  });

  describe("when got data successfully", () => {
    it("handles successful state correctly", async () => {
      const { deferred, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise)

      const { result, waitForNextUpdate } = renderHook(usePokemon);

      deferred.resolve({json: () => ({pokemon: "pikachu"})})

      await waitForNextUpdate()

      expect(result.current.pokemon).toStrictEqual({pokemon: "pikachu"})
    });
  });

  describe("with an error during request", () => {
    it("handles error state correctly", async () => {
      global.fetch = jest.fn(() => {
        return new Promise(() => {
          throw "Fetch error"
        })
      }) 

      const { result, waitForNextUpdate } = renderHook(usePokemon);
      await waitForNextUpdate()

      expect(result.current.error).toStrictEqual("Fetch error")
    });
  });
});
