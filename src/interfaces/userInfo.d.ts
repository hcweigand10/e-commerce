export interface userInfo {
    email: string | null,
    name: string | null,
    pic: string | null
}

export type cart = {id:number}[]

export type userContext = {
    userInfo: userInfo,
    setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>,
    cart: cart,
    setCart: React.Dispatch<React.SetStateAction<cart>>
}