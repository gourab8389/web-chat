"use client"

import Image from "next/image";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react"

interface iAppProps {
    data: {
        User: {
            image: string | null;
            name: string | null;
        };
        message: string;
    }[];
}

export default function ChatComponent({ data }: iAppProps) {
    const [totalComments, setTotalComments] = useState(data);

    const messageEndRef = useRef<HTMLInputElement>(null);

    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
        cluster: 'ap2'
      });

      var channel = pusher.subscribe('chat');
    channel.bind('hello', function(data: any) {
      const parsedComments = JSON.parse(data.message);

      setTotalComments((prev)=> [...prev, parsedComments]);
    });

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    useEffect(() => {
        scrollToBottom();
    },[totalComments]);


    return (
        <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
            <div className="flex flex-col gap-5">
                {totalComments.map((message, index) => (
                    <div key={index} className="px-4 py-4 border border-gray-300 rounded-lg">
                        <div className="flex items-center gap-10">
                            <Image
                                src={message.User.image as string} alt="profile image of user"
                                width={50}
                                height={50}
                                className="w-12 h-1/2 object-cover rounded-full mr-4"
                            />

                            <div className="rounded-lg bg-white p-4 shadow-md self-start">
                                {message.message}
                            </div>

                        </div>
                        <p className="font-light text-xs text-gray-600">
                            {message.User.name}
                        </p>
                    </div>
                ))}
                <div ref={messageEndRef}></div>
            </div>
        </div>
    )
}