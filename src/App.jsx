import { useState } from "react";

export default function App(){

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    //todos.push(text);
    setTodos([
      ...todos, text
    ]);
  }

  function removeTodo(indexToRemove){
   // todos.splice(indexToRemove, 1)
   // setTodos([...todos])
    const newTodos = todos.filter((todos, idx) => idx !== indexToRemove);
    setTodos(newTodos);

  }

   function onSubmit(event){
      event.preventDefault();
      addTodo();
      setText("");
   }

  return (
    <main className="w-full min-h-screen flex flex-col ">
      <form className="flex flex-row gap-2 justify-center p-5"
      onSubmit={onSubmit}
      >
        <input 
        name="todo"
        type="text" 
        className="p-2 rounded text-black w-full max-w-screen-sm "
        placeholder="escribe la tarea" 
        value={text}
        onChange={(event) => setText(event.target.value) }
        required
        />
        <button className="bg-white text-black px-3 rounded">agregar
          
        </button>
      </form>
      <div className="max-w-screen-sm  w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && <p className="text-white/50">Sin tareas pendientes</p>}
        {todos.length > 0 &&
          todos.map((todo, idx) => {
          return <div key={`todo-${idx}`} 
          className="bg-write/10 rounded p-4 flex flex-row justify-between"
          >
            <span className="select-none">{todo}</span> 
            <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex"
             onClick={() => removeTodo(idx)}>x</span>
          </div>
        })}
      </div>
    </main>
  )
}       