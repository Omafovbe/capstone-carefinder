export interface IUser {
    uid?: string,
    displayName?: string | null,
    email: string,
    password: string,
}

export interface IHealthSys {
    name: string,
    address: string,
    phone?: string,  
    email?: string
}