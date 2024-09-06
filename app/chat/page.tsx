import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { redirect } from 'next/navigation'
import Form from './[components]/form'

const page = async () => {

    const session = await getServerSession(authOptions)

    if(!session) {
        return (
            redirect("/")
        )
    }

    return (
        <div className="h-screen flex flex-col bg-gray-200">
            <Form/>
        </div>
    )
}

export default page;
