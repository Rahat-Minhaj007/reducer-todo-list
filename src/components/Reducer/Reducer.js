export const initialToDoState = {
    toDoList: []
}


export const toDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, toDoList: [...state.toDoList, action.payload] };

        case "REMOVE":
            return { ...state, toDoList: state.toDoList?.filter((todo) => todo.id !== action.payload) };

        case "COMPLETED":
            return { ...state, toDoList: state.toDoList?.map((todo) => todo.id === action.payload ? { ...todo, completed: true } : todo) }

        default:
            return state;
    }

}