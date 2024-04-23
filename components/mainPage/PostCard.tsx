'use client'

import Link from "next/link"
import { CiFaceSmile } from "react-icons/ci"
import { FaCircle, FaImage } from "react-icons/fa"
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa6"
import { IoPerson } from "react-icons/io5"
import { TbDots } from "react-icons/tb"











export default function PostCard() {
    return(
        <div className="flex flex-col gap-2 max-w-[470px] w-full border-b border-b-border py-2">
            <div className="flex flex-row items-center px-2 justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-foreground">
                        <IoPerson className="text-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 items-center">
                            {/* TODO: URL Güncellenecek */}
                            <Link href={'/'} className="font-semibold text-sm">
                                Username
                            </Link>
                            <FaCircle className="text-[4px]"/>
                            <label className="text-secondary-foreground text-sm">1d</label>
                        </div>
                        <label className="text-xs text-secondary-foreground">Location</label>
                    </div>
                </div>
                <button>
                    <TbDots className="text-xl"/>
                </button>
            </div>
            <div className="flex items-center justify-center aspect-square w-full bg-secondary-foreground rounded">
                <FaImage className="text-9xl text-background"/>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                    <button>
                        <FaRegHeart className="text-2xl"/>
                    </button>
                    <button>
                        <FaRegComment className="text-2xl"/>
                    </button>
                </div>
                <button>
                    <FaRegBookmark className="text-2xl"/>
                </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div className="relative">
                    <div className="flex absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 aspect-square bg-secondary-foreground rounded-full items-center justify-center border border-background">
                        <IoPerson className="text-xs text-background"/>
                    </div>
                    <div className="flex absolute top-1/2 left-2 -translate-y-1/2 w-4 h-4 aspect-square bg-secondary-foreground rounded-full items-center justify-center border border-background">
                        <IoPerson className="text-xs text-background"/>
                    </div>
                    <div className="flex absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 aspect-square bg-secondary-foreground rounded-full items-center justify-center border border-background">
                        <IoPerson className="text-xs text-background"/>
                    </div>
                </div>
                <button className="text-sm font-semibold ml-8">123 likes</button>
            </div>
            <button className="text-sm text-start text-secondary-foreground">
                See comments
            </button>
            <div className="flex flex-row items-center gap-2">
                <input className="flex flex-1 bg-transparent text-sm" placeholder="Add comment..."/>
                <button>
                    <CiFaceSmile className="text-sm text-secondary-foreground"/>
                </button>
            </div>
        </div>
    )
}