function Title(p) {
    return (
        <h1 {...p} className="text-3xl text-slate-200 font-bold text-center">
            {p.children}
        </h1>
    );
}

export default Title;
