import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
            <div className="w-[500px] space-y-5">
                <div className="flex justify-center relative">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 text-slate-100"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da tarefa</Title>
                </div>

                <div className="bg-slate-300 p-4 rounded-md">
                    <h2 className="text-xl  font-bold text-slate-600">
                        {title}
                    </h2>
                    <p className=" text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;
