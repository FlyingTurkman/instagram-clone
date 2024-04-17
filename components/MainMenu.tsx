'use client'

import Image from "next/image"
import Link from "next/link"















export default function MainMenu() {
    return(
        <div className="w-[350px] flex flex-col p-5 max-h-screen h-screen overflow-auto border-r border-r-border">
            <Link href={'/'} className="w-28 my-6">
                <Image
                src={'/images/logo-text.svg'}
                alt="Logo"
                width={200}
                height={100}
                className="object-contain"
                />
            </Link>
            <div className="flex flex-col gap-4">

            </div>
        </div>
    )
}