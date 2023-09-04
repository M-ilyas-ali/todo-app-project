import { NextRequest, NextResponse } from "next/server";
import { todo_table, db, todo } from "../../../lib/drizzle/drizzle";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.task) {
      const res = await db
        .insert(todo_table)
        .values({
          task: req.task,
        })
        .returning();
      console.log(res);
      return NextResponse.json({ message: "data added 🥰" });
    } else {
      throw new Error("task is field 🥵");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
export async function GET(request: NextRequest) {
try{
      const res:todo[] = await db.select().from(todo_table);
      return NextResponse.json(res);
}catch(error){
  console.log((error as {message:string}).message);
  return NextResponse.json({message:"could not Get Data 🥵"})
}  

};
export async function DELETE(request: NextRequest) {
  const req= await request.json()
  try{
        const res:todo[] = await db.delete(todo_table).where(eq(todo_table.id,req.id)).returning();
        return NextResponse.json({message:"Task is Deleted 👍"});
  }catch(error){
    console.log((error as {message:string}).message);
    return NextResponse.json({message:"could not Delete Task 🥵"})
  }  
  
  };
// export async function GET(request: NextRequest) {
 
//   try {
   
//       const res = await db
//         .select()
//         .from(todo_table);
//       console.log(res);
//       return NextResponse.json(res)
//   } catch (error) {
//     return NextResponse.json({
//       message: (error as { message: string }).message,
//     });
//   }
// }