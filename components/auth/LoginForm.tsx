'use client'

import Image from "next/image"














export default function LoginForm() {
    return(
        <form className="flex w-full flex-col items-center gap-2 border border-border py-10 px-6">
            <div className="p-4 my-10">
                <Image
                src='/images/logo-text.svg'
                alt="Logo"
                width={175}
                height={51}
                className="object-contain"
                />
            </div>
            <input className="w-full bg-background-secondary text-secondary-foreground p-2 rounded border border-border" placeholder="Username or email"/>
            <input className="w-full bg-background-secondary text-secondary-foreground p-2 rounded border border-border" placeholder="Password" type="password"/>
        </form>
    )
}