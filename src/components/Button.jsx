function Button(p) {
    return (
        <button {...p} className="bg-slate-400 text-white p-2 rounded-md">
            {p.children}
        </button>
    );
}

export default Button;
