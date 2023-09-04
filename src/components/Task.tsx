"use client"
import {AiFillDelete} from "react-icons/ai"
type item={
    id:number,
    task:string,
};
type props={
    task:item
};

export default function Task({task}:props){
    async function Del_data(){
        try{
            if(task){
                const id=task.id;
            const res=await fetch("/api/todo",{
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                next: { revalidate:0 },
                //? to stringify we should pass and object key would by property of data base and value would be user input or user given data 
                body: JSON.stringify({id}),
            });
            //? this console.log will let us know with true  api is running or not 
            console.log(res.ok);
          
          }
        }catch(error){
          console.log("error 🥵",error)
        }
      }
    const Chunk=(
    <section className="  flex gap-4 justify-center items-center bg-slate-200 rounded-lg px-1 shadow-md shadow-secondary">
        <div className="w-2 h-2 bg-secondary rounded-full"></div>
        <div className=" flex justify-between">
        <div  placeholder=" Task " className="flex items-center w-[20rem] h-10 rounded-lg bg-slate-200 ">{task.task}</div><button onClick={Del_data}><AiFillDelete className="m-2"/></button></div>
    </section>
    );
    return Chunk
}