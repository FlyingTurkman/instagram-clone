'use client'

import { userType } from "@/types"
import { Dispatch, SetStateAction, createContext, useState } from "react"






export type siteContextType = {
    user: userType | null,
    setUser: Dispatch<SetStateAction<userType | null>>
}

export const SiteContext = createContext<siteContextType>({
    user: null,
    setUser: () => {}
})


export default function SiteContextProvider({
    children,
    initialUser
}: {
    children: React.ReactNode,
    initialUser: userType | null
}) {

    const [user, setUser] = useState<userType | null>(initialUser)

    const siteData: siteContextType = {
        user,
        setUser
    }

    return(
        <SiteContext.Provider value={siteData}>
            {children}
        </SiteContext.Provider>
    )
}