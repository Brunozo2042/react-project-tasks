import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(p) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                <h2 className="text-xl  font-bold text-slate-600 text-center">
                    Tarefas
                </h2>
                {p.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            onClick={() => p.onTaskClick(task.id)}
                            className={`bg-slate-400 w-full text-left flex items-center gap-2 text-white p-2 rounded-md ${
                                task.isCompleted && "line-through"
                            }`}
                        >
                            {task.isCompleted && <CheckIcon />}
                            {task.title}
                        </button>
                        <Button onClick={() => onSeeDetailsClick(task)}>
                            <ChevronRightIcon />
                        </Button>
                        <Button onClick={() => p.onDeleteTaskClick(task.id)}>
                            <Trash2Icon />
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
