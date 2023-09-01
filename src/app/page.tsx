
import Input_Component from '@/components/Input_component'
import Task from '@/components/Task'
import { todo } from '@/lib/drizzle/drizzle';

 async function Get_data(){
  try{
    const res= await fetch("http://localhost:3000/api/todo",{
      method:"GET",
      headers:{"Content-Type":"application/jason"},
      next: { revalidate:0 },
    });
    if(!res.ok){
      throw new Error("Failed to fetch")
    };
    const result=await res.json()
    
    return result
  }catch(error){
console.log((error as {message:string}).message)
  }
 }


export default async function Home() {
 const data:todo[]=await Get_data()

  return (
    <form className="  bg-gradient-to-tr from-pink-700 to-purple-500 flex min-h-screen  items-center justify-center gap-4 ">
      <div className='flex flex-col justify-center items-center max-w-md gap-2 max-h-80 overflow-scroll bg-gray-100 py-4 px-2 rounded-lg shadow-lg shadow-slate-400'>
   {data.map((item)=><Task>{item.task}</Task>)}
   <div className=' w-[70%] h-[2px] rounded-full mx-auto my-2 bg-gradient-to-tr from-primary to-secondary'>
    
   </div>

   </div>
 
    </form>
  )
}
