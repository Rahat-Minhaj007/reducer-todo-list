export const initialToDoState = {
    toDoList: []
}

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newToDo = {
                id: action.id,
                name: action.name,
                completed: action.completed
            };
            const allToDoList = [...state.toDoList, newToDo];
            return { toDoList: allToDoList };
        case "REMOVE":
            const afterRemoveTODoList = state.toDoList.filter((rm) => rm.id !== action.id);
            return { toDoList: afterRemoveTODoList };
        case "COMPLETED":
            return state;
        default:
            return state;
    }

}