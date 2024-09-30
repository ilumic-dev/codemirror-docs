import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { extensions } from "./extensions";

export function startCodemirror() {
  document?.querySelector(".cm-editor")?.remove();
  let state = EditorState.create({
    doc: `import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Do the laundry', completed: false },
    { id: 2, name: 'Buy groceries', completed: false },
    { id: 3, name: 'Prepare dinner', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      id: tasks.length + 1,
      name: newTask,
      completed: false
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task List</h1>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              textDecoration: task.completed ? 'line-through' : 'none', 
              marginBottom: '10px' 
            }}
          >
            {task.name}
            <button 
              onClick={() => toggleTaskCompletion(task.id)} 
              style={{ marginLeft: '10px' }}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              onClick={() => handleDeleteTask(task.id)} 
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;`,
    extensions: [...extensions, javascript({ jsx: true })],
    tabSize: 6,
  });

  const view = new EditorView({
    parent: document.querySelector(".editor-example"),
    state: state,
  });
  view;
}
