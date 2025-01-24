import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTask } from "./utilities/state/taskSlice.js";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const alreadyAddTask = useSelector((state) => state.alreadyAddedTask.tasks);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const addNewTask = () => {
    dispatch(storeTask(task));

    setTask("");
  };

  return (
    <>
      <div>
        <label
          htmlFor="small-input"
          className="mb-2 text-sm font-medium text-dark"
        >
          Task
        </label>
        <input
          type="text"
          id="small-input"
          name="task"
          value={task}
          onChange={handleInput}
          className="w-1/2 m-4 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
        />
        <button
          type="button"
          onClick={addNewTask}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Add new task
        </button>
      </div>
      <div>
        {alreadyAddTask.length > 0 && alreadyAddTask.map((task) => (
            <div key={task.id} className='m-4'>
              <p className='inline mr-4'>{task.task}</p>
              <button className='text-white bg-red-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Remove</button>
            </div>
        ))}
      </div>
    </>
  );
};

export default App;
