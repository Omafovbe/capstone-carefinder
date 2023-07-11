export interface IUser {
    uid?: string,
    displayName?: string | any,
    email: string | any,
    password: string,
}

export interface IHealthSys {
    name: string,
    address: string,
    phone?: string,  
    email?: string
}

export interface Notify {
    message: string,
    status: string
}