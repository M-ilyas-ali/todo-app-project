"use client"
import {useState} from 'react'

export default function Input_Component() {
  const [task,settask]=useState("");

  async function postData() {
   try{
    if(task){
    const res=await fetch("/api/todo",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(task),
    });
  }
}catch(error){
  console.log("error",error)
}

    
  }
  const Material = (
    <main className="max-w-md flex justify-between items-center px-1">
    <input value={task}onChange={(e)=>settask(e.target.value)}
      type="text"
      name="task"
      placeholder=" Enter Task "
      className=" focus:outline-none focus:outline-secondary w-[18rem] h-10 rounded-lg bg-slate-200  px-1 shadow-md shadow-primary"
    ></input>
     <button className="w-10 h-10 bg-primary rounded-md border-2 border-red-300 ml-3 text-yellow-400">OK</button>
    </main>
  );
  return Material;
}
