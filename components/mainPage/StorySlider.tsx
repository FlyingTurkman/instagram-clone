'use client'

import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import StoryIcon from "./StoryIcon"












export default function StorySlider() {
    return(
        <div className="relative p-2">
            <button className="aspect-square z-[1] absolute top-6 left-2 rounded-full p-1 bg-white text-background-secondary">
                <IoChevronBack/>
            </button>
            <button className="aspect-square z-[1] absolute top-6 right-2 rounded-full p-1 bg-white text-background-secondary">
                <IoChevronForward/>
            </button>
            <div className="flex relative flex-row gap-4 max-w-xl overflow-hidden">
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
                <StoryIcon/>
            </div>
        </div>
    )
}