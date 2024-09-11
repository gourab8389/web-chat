import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { redirect } from 'next/navigation'
import Form from './[components]/form'
import { prisma } from '../lib/db'
import ChatComponent from './[components]/chat'


async function getData() {
    const data = await prisma.message.findMany({
        select: {
            message: true,
            id: true,
            User: {
                select: {
                    name: true,
                    image: true,
                }
            }
        },
        orderBy: {
            ceratedAt: "asc"
        },
        take: 50,
    })
    return data;
}

const ChatHomePage = async () => {

    const data = await getData();

    const session = await getServerSession(authOptions)

    if (!session) {
        return (
            redirect("/")
        )
    }

    return (
        <div className="h-screen flex flex-col bg-gray-200">
            <ChatComponent data={data as any}/>
            <Form />
        </div>
    )
}

export default ChatHomePage;
