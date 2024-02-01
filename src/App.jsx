import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="dark:bg-slate-800 h-full">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
