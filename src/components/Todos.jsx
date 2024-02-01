import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateEditMode } from "../fea/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-gray-300 text-3xl text-center mb-8">Todos</div>
      
      
      <ul className="pl-10 mx-auto max-w-2xl divide-y divide-gray-200 dark:divide-gray-700">
        
        {todos.map((todo) => (
          <li className="py-3 sm:pb-4 flex justify-between" key={todo.id}>
            <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
              {todo.Title}
            </p>

            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <button 
              className="bg-green-800 mr-8 text-white px-4 py-2 rounded-md focus:outline  "
              onClick={() => dispatch(updateEditMode(todo.id))}
              >
                Edit
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))} 
              className="bg-red-800 text-white px-4 py-2 rounded-md focus:outline  ">
                Delete
              </button>
            </div>
          </li>
        ))}

      </ul>
    </>
  );
};

export default Todos;
