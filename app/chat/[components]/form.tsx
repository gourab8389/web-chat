"use client"

import { postData } from "@/app/action";

const Form = () => {
  return (
    <form action={async (formData)=>{
      await postData(formData)
    }} className="p-6 fixed bottom-0 left-0 w-full bg-white">
        <div className="flex">
            <input 
            type="text" name="message" placeholder="Type your message..."
            className="flex-grow py-2 px-4 outline-none"
            />
            <button className="flex items-center justify-center gap-2 rounded-full bg-fuchsia-700 px-8 py-3 text-center text-sm font-semibold text-white ring-fuchsia-500 transition duration-100 hover:bg-fuchsia-900 md:text-base" type="submit">Send</button>
        </div>
    </form>
  )
}

export default Form;
