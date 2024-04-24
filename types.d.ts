import { ObjectId } from "mongodb"

export {}









export type userType = {
    _id: ObjectId,
    username: string,
    email: string,
    password: string,
    token: string,
    avatar?: string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}














declare global {
    namespace NodeJS {
        interface ProcessEnv {
            mongoUri: string,
            database: string
        }
    }
}