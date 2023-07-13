export interface IUser {
    uid?: string,
    displayName?: string | any,
    email: string | any,
    password: string,
}

export interface IHealthCare {
    id?: string,
    name: string,
    city: string,
    state: string,  
    details: string
}

export interface Notify {
    message: string,
    status: string
}