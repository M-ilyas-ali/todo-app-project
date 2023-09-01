import {AiFillDelete} from "react-icons/ai"
export default function Task({children}:any){
    const Chunk=(
    <section className="  flex gap-4 justify-center items-center bg-slate-200 rounded-lg px-1 shadow-md shadow-secondary">
        <div className="w-2 h-2 bg-secondary rounded-full"></div>
        <div className=" flex justify-between">
        <div  placeholder=" Task " className="flex items-center w-[20rem] h-10 rounded-lg bg-slate-200 ">{children}</div><AiFillDelete/></div>
    </section>
    );
    return Chunk
}