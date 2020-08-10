import React, { useRef, useReducer } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add": {
        return [
          ...state,
          {
            id: nanoid(),
            name: action.name,
          },
        ];
      }
      case "remove": {
        return state.filter((note) => note.id !== action.id);
      }
      default:
        return state;
    }
  }, []);
  const inputRef = useRef();

  const addNote = () => {
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        <input ref={inputRef} />
        <button onClick={addNote}>Add note</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={note.id}>
            {note.name}
            <button onClick={() => dispatch({ type: "remove", id: note.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
