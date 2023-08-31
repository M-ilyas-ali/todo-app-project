import { NextRequest, NextResponse } from "next/server";
import {todo_table,db}from "../../../lib/drizzle/drizzle"
export async function GET(request: NextRequest) {
    return new Response('Hello, Next.js!')
  }
  export async function POST(request:NextRequest){
    const req= await request.json();
    try{
      if(req.task){
        const res=await db.insert(todo_table).values({
          task:req.task,
        }).returning();
        console.log(res)
        return NextResponse.json({message:"data added   "});
      
      }else{
        throw new Error("task is field")
      }
    }catch(error){
     return NextResponse.json({message:(error as {message:string}).message})
    }
  }