
import { getAllTasks } from "@/app/actions/serverActions"
import { Button } from "../ui/button"
export default async function List() {
    const tasks = await getAllTasks()    
    
    return(
        <div >
            <div className="w-[700px] bg-white  rounded-2xl p-2 m-2">
        {
          (await tasks.data).map((task) => (
            <ul key={task.id} role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold text-gray-900">{task.name}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm/6 text-gray-900">{task.isComplete}</p>
      <Button>delete</Button>
      <p className="mt-1 text-xs/5 text-gray-500">Last seen <time>{task.isComplete}</time></p>
    </div>
    </li>
            </ul>
          ))
        }
      </div>
        </div>
    )
}