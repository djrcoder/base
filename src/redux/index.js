import { createStore } from "redux";

const initialState = {
    yesterday: ["Feed", "Prepare"],
    today: ["Feed"]
}

export const addToDo = text => ({
    type: "ADD_TODO",
    text
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, today: [...state.today, action.text] }
        default:
            return state;
    }
}


export const store = createStore(reducer);