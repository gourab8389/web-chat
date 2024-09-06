import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { redirect } from 'next/navigation'

const page = async () => {

    const session = await getServerSession(authOptions)

    if(!session) {
        return (
            redirect("/")
        )
    }

    return (
        <div className="h-screen flex flex-col bg-gradient-to-br from-gray-200 to-gray-50"></div>
    )
}

export default page;
