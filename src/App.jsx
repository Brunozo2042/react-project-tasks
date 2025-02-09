import { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
    // Carregado as tasks que estão no localStorage
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    // Toda alteração das tasks, atualiza la no localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Uso de API
    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         // Chamar API
    //         const response = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //             { method: "GET" }
    //         );

    //         // Pegar os dados retornados
    //         const data = await response.json();

    //         // Armazenar esse dados no state
    //         setTasks(data);
    //     };
    //     // Opcional chamar a API para buscar tarefas
    //     // fetchTasks();
    // }, []);

    // Botão para visualiza a task
    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id == taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(newTasks);
    }

    // Botão para excluir task
    function onDeleteTaskClick(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }

    // Botão para adicionar task
    function onAddTaskClick(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-full min-h-screen bg-slate-400 flex justify-center p-6">
            <div className="w-[500px] space-y-5">
                <Title>Gerenciador de tarefas</Title>
                <AddTask onAddTaskClick={onAddTaskClick} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onDeleteTaskClick={onDeleteTaskClick}
                />
            </div>
        </div>
    );
}

export default App;
