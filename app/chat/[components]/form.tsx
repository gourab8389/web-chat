"use client"

const Form = () => {
  return (
    <form className="p-6 fixed bottom-0 left-0 w-full bg-white">
        <div className="flex">
            <input 
            type="text" name="message" placeholder="Type your message..."
            className="flex-grow py-2 px-4 outline-none"
            />
        </div>
    </form>
  )
}

export default Form
