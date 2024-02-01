import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../fea/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
     
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl mb-10 font-bold text-indigo-600 sm:text-3xl">
              Todos app
            </h1>

            <form
              onSubmit={addTodoHandler}
              className="mb-0 mt-6  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center mb-10 text-xl text-gray-500 font-medium">Add task</p>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-sm"
                    value={input}
                    onChange={(e) =>{ setInput(e.target.value); }}
                    placeholder="Enter task"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Add task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
