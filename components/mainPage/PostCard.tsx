'use client'

import Link from "next/link"
import { FaCircle, FaDotCircle } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { TbDots } from "react-icons/tb"











export default function PostCard() {
    return(
        <div className="flex flex-col max-w-[470px] w-full">
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
        </div>
    )
}