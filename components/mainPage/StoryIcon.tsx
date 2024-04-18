'use client'

import { IoPerson } from "react-icons/io5"









export default function StoryIcon() {
    return(
        <div className="flex flex-col flex-shrink-0 snap-mandatory">
            <div className="aspect-square items-center justify-center rounded-full p-[2px] bg-gradient-to-br from-purple-600 to-orange-600">
                <div className="flex w-full h-full rounded-full items-center justify-center bg-secondary-foreground">
                    <IoPerson className="text-2xl text-black"/>
                </div>
            </div>
            <label className="text-xs">username</label>
        </div>
    )
}