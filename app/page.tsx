'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CreateTask from "./actions/serverActions"
import { Task } from "@/lib/generated/prisma"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
//import List from "../components/custom/List"


export default function Home() {


  const formSchema = z.object({
  name: z.string().min(5, {
    message: "Task can be of minimum 5 characters",
  }),
})

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await CreateTask(values as Task)
    console.log(values)
    form.reset()
  }

  return (
    <div className="flex justify-center">
      <div>
        task dashboard
      </div>
    <div className="flex m-10 p-5 ">
        <div className="h-30 w-40 bg-blue-300 m-5 rounded-2xl">Completed</div>
        <div className="h-30 w-40 bg-green-300 m-5 rounded-2xl">Pending</div>
        <div className="h-30 w-40 bg-orange-300 m-5 rounded-2xl">Total Tasks</div>
      </div>
      

    <div className="flex justify-center items-center h-screen bg-gray-300 ">
      
      <div>
      <div className="bg-white m-2 p-5 rounded-2xl "> 
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Your Task" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
      list component here
      {/* <List/> */}
    </div>
    </div>
    </div>
  );
}