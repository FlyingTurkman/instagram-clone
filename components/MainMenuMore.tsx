'use client'

import Link from "next/link"
import { IoSettingsOutline } from "react-icons/io5"
import { PiBookmarkSimple, PiPulse } from "react-icons/pi"













export default function MainMenuMore() {

    return(
        <div className="flex flex-col absolute bottom-14 w-[350px] p-4 left-4 gap-4 bg-background-secondary rounded-md">
            <Link href={'/'} className="menuItem hover:bg-[#333]">
                <IoSettingsOutline className="text-2xl"/>
                Settings
            </Link>
            <Link href={'/'} className="menuItem hover:bg-[#333]">
                <PiPulse className="text-2xl"/>
                Activities
            </Link>
            <Link href={'/'} className="menuItem hover:bg-[#333]">
                <PiBookmarkSimple className="text-2xl"/>
                Bookmarks
            </Link>
            <span className="separator !h-[2px]"/>
            <Link href={'/'} className="menuItem hover:bg-[#333]">
                Change Account
            </Link>
            <span className="separator"/>
            <Link href={'/'} className="menuItem hover:bg-[#333]">
                Log Out
            </Link>
        </div>
    )
}