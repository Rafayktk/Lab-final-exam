import prisma from "@/lib/prisma";



export default async function CreateTask(formData: any){
   const Task = await prisma.task.create({ data:{ name: formData.name }
   })
}

export async function getAllTasks () {
    const tasks = prisma.task.findMany({
        where: {isComplete: true}
    })
    return{
        success: true,
        data: tasks
    }
}

export async function countTasks() {
    
}
    