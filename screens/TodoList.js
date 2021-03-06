import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo}/>;
        })
      : "No todos, yay!"}
  </ul>
);
 

const mapStateToProps = state => {
  const { visibilityFilters } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilters);
  return { todos };
   
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
