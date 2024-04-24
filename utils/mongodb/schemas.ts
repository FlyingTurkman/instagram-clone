import { userType } from "@/types";
import { Schema } from "mongoose";








export const userSchema = new Schema<userType>({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
}, {
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            delete ret.email,
            delete ret.password,
            delete ret.token
        }
    },
    toObject: {
        virtuals: true,
        transform(doc, ret) {
            delete ret.email,
            delete ret.password,
            delete ret.token
        }
    }
})