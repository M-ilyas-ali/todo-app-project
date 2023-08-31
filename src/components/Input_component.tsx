"use client"
import {useState} from 'react'

export default function Input_Component() {
  const [task,settask]=useState("");
 function helper(){
  postData();
  settask("")
 }
  async function postData() {
   try{
    if(task){
    const res=await fetch("/api/todo",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // cache: "no-cache",
        //? to stringify we should pass and object key would by property of data base and value would be user input or user given data 
        body: JSON.stringify({task:task}),
    });
    //? this console.log will let us know with true  api is running or not 
    console.log(res.ok)
  }
}catch(error){
  console.log("error 🥵",error)
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
     <button onClick={helper}className="w-15 h-10 bg-primary rounded-md border-2 border-red-300 ml-3 text-yellow-400">OK</button>
    </main>
  );
  return Material;
}
