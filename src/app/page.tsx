
import Input_Component from '@/components/Input_component'
import Task from '@/components/Task'


export default function Home() {
  return (
    <main className="  bg-gradient-to-tr from-pink-700 to-purple-500 flex min-h-screen  items-center justify-center gap-4 ">
      <div className='flex flex-col justify-center items-center max-w-md gap-2 bg-gray-100 py-4 px-2 rounded-lg shadow-lg shadow-slate-400'>
   <Task>pakistan</Task>
   <div className=' w-[70%] h-[2px] rounded-full mx-auto my-2 bg-gradient-to-tr from-primary to-secondary'></div>
   <Input_Component/>
 
  
   
   </div>
    </main>
  )
}
