import { userType } from "@/types";
import { cookies } from "next/headers";
import { Users } from "../mongodb/models";














export async function userCheckByToken(): Promise<userType | null> {
    try {
        const cookieStore = cookies()

        const token = cookieStore.get('token')

        if (!token) {
            return null
        }

        const user: userType | null = await Users.findOne({
            token
        })

        if (!user) {
            return null
        }

        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        console.log(error)
        return null
    }
}