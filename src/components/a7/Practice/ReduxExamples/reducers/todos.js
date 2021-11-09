const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todos = (state = data, action) => {
    switch (action.type) {
        case 'create-todo':
            console.log(state);

            const new_todo = {
                ...action.todo,
                id: Date.now()
            }

            return [
                ...state,
                new_todo
            ]
        case 'delete-todo':
            return state.filter(todo => todo !== action.todo);
        case 'update-todo':

            return state.map(todo => {
                return todo._id === action.todo._id ? action.todo : todo;
            });

        default:
            return state;
    }
}


export default todos;
