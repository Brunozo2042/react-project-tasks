import { useState } from "react";
import Input from "./Input";

function AddTask(p) {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                type="text"
                placeholder="Título da Tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(event) => setdescription(event.target.value)}
            />
            <button
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert(
                            "Preencha o título e a descrição da tarefa"
                        );
                    }

                    p.onAddTaskClick(title, description);
                    setTitle("");
                    setdescription("");
                }}
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;
