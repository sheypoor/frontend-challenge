import NEWSLETTER from "../enums/newsletter"

interface UserModel {
    name: string
    age: number
    email: string
    newsletter: NEWSLETTER
}

export default UserModel