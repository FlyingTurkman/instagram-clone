'use client'

import PostCard from "./PostCard"













export default function Posts() {
    return(
        <div className="flex flex-col gap-4 items-center w-full max-w-xl">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
}