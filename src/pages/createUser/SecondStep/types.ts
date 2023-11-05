import { NEWS_LETTER } from "../context/enums"

export interface IUser {
    name: string
    age: number
    email: string
    newsletter: NEWS_LETTER
}