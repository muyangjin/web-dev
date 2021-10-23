import TodoItem from "./TodoItem.js";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

