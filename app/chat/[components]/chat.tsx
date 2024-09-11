"use client"

import { useState } from "react"

interface iAppProps {
    data: {
        User: {
            image: string | null;
            name: string | null;
        };
        message: string;
    }[];
}

export default function ChatComponent({data}: iAppProps) {
    const [totalComments, setTotalComments] = useState();


    return (
        <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
            <div className="flex flex-col gap-4">

            </div>
        </div>
    )
}