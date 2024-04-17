'use client'

import Image from "next/image"
import Link from "next/link"
import { IoHeart, IoHeartOutline, IoHome, IoHomeOutline, IoSearch, IoSearchOutline } from "react-icons/io5"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { FaFacebookMessenger, FaInstagram, FaPlusSquare, FaRegPlusSquare } from "react-icons/fa"
import MainMenuSearchBar from "./MainMenuSearchBar"
import { MdExplore, MdOutlineExplore } from "react-icons/md"
import { PiMessengerLogo, PiMessengerLogoFill, PiVideo, PiVideoFill } from "react-icons/pi"














export default function MainMenu() {

    const searchDivRef = useRef<HTMLDivElement>(null)

    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const [isHalf, setIsHalf] = useState<boolean>(false)

    const pathname = usePathname()

    useEffect(() => {

        const handleOutSideClick = ((e: MouseEvent) => {
            if (e) {
                if (!searchDivRef.current?.contains(e.target as Node)) {
                    setIsHalf(false)
                }
            }
        })

        document.addEventListener('mousedown', handleOutSideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutSideClick)
        }
    }, [searchDivRef])
    return(
        <div className="w-[350px] flex flex-col p-5 max-h-screen h-screen overflow-auto border-r border-r-border">
            {!isHalf? (
                <>
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
                    <Link href={'/'} className={`menuItem ${pathname == '/'? 'font-semibold': ''}`}>
                        {pathname == '/'? (
                            <IoHome className="text-2xl"/>
                        ): (
                            <IoHomeOutline className="text-2xl"/>
                        )}
                        Home Page
                    </Link>
                    <button className={`menuItem ${isSearchOpen? 'font-semibold': ''}`} onClick={searchOpen}>
                        {isSearchOpen? (
                            <IoSearch className="text-2xl"/>
                        ): (
                            <IoSearchOutline className="text-2xl"/>
                        )}
                        Search
                    </button>
                    <Link href={'/explore'} className={`menuItem ${pathname.startsWith('/explore')? 'font-semibold': ''}`}>
                        {pathname.startsWith('/explore')? (
                            <MdExplore className="text-2xl"/>
                        ): (
                            <MdOutlineExplore className="text-2xl"/>
                        )}
                        Explore
                    </Link>
                    <Link href={'/reels'} className={`menuItem ${pathname.startsWith('/reels')? 'font-semibold': ''}`}>
                        {pathname.startsWith('/reels')? (
                            <PiVideoFill className="text-2xl"/>
                        ): (
                            <PiVideo className="text-2xl"/>
                        )}
                        Reels
                    </Link>
                    <Link href={'/messenger'} className={`menuItem ${pathname.startsWith('/messenger')? 'font-semibold': ''}`}>
                        {pathname.startsWith('/messenger')? (
                            <PiMessengerLogoFill className="text-2xl"/>
                        ): (
                            <PiMessengerLogo className="text-2xl"/>
                        )}
                        Messenger
                    </Link>
                    <Link href={'/notifications'} className={`menuItem ${pathname.startsWith('/notifications')? 'font-semibold': ''}`}>
                        {pathname.startsWith('/notifications')? (
                            <IoHeart className="text-2xl"/>
                        ): (
                            <IoHeartOutline className="text-2xl"/>
                        )}
                        Notifications
                    </Link>
                    <Link href={'/create'} className={`menuItem ${pathname.startsWith('/create')? 'font-semibold': ''}`}>
                        {pathname.startsWith('/create')? (
                            <FaPlusSquare className="text-2xl"/>
                        ): (
                            <FaRegPlusSquare className="text-2xl"/>
                        )}
                        Create
                    </Link>
                </div>
                </>
            ): (
                <>
                <div className="flex flex-row">
                    <div className="flex flex-col gap-2">
                        <Link href={'/'} className="menuItem my-6">
                            <FaInstagram className="text-2xl"/>
                        </Link>
                        <Link href={'/'} className="menuItem text-2xl">
                            {pathname == '/'? (
                                <IoHome/>
                            ): (
                                <IoHomeOutline/>
                            )}
                        </Link>
                        <button className="menuItem text-2xl" onClick={searchOpen}>
                            {isSearchOpen? (
                                <IoSearch/>
                            ): (
                                <IoSearchOutline/>
                            )}
                        </button>
                    </div>
                    <div ref={searchDivRef} className="flex flex-col flex-1 p-2">
                        <label className="text-2xl font-semibold">Search</label>
                        <MainMenuSearchBar/>
                        <span className="separator"/>
                    </div>
                </div>
                </>
            )}
            
        </div>
    )

    function searchOpen() {
        setIsSearchOpen(((isOpen) => !isOpen))
        setIsHalf((isHalf) => !isHalf)
    }
}