'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import StorySlider from "./StorySlider"











export default function StoriesList() {

    const variant = useSearchParams().get('variant')
    return(
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 mt-10">
                <Link href={'/?variant=home'} className={`${variant == 'following'? 'text-secondary-foreground': 'text-primary-foreground font-semibold'}`}>
                    For You
                </Link>
                <Link href={'/?variant=following'} className={`${variant == 'following'? 'text-primary-foreground font-semibold': ' text-secondary-foreground'}`}>
                    Following
                </Link>
            </div>
            <span className="separator"/>
            <StorySlider/>
        </div>
    )
}