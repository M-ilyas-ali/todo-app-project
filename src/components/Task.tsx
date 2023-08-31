export default function Task({children}:any){
    const Chunk=(
    <section className="  flex gap-2 justify-center items-center bg-slate-200 rounded-lg px-1 shadow-md shadow-secondary">
        <div className="w-2 h-2 bg-secondary rounded-full"></div>
        <div  placeholder=" Task " className="flex items-center w-[20rem] h-10 rounded-lg bg-slate-200 ">{children}</div>
    </section>
    );
    return Chunk
}