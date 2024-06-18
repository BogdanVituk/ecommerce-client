import { IProductItem } from "./IProductItems";

export interface IUserinfo {
    user: IRegisterResponce | {};
    isAuth: boolean;
    loading: boolean;
    basket: IProductItem[]
}
export interface IRegisterResponce {
    email: string
    password: string
    name: string
    avatar: string
    role: string
    id: number
}


export type responceUserLogin =  {
    email: string;
    password: string;
    iat: any;
    exp: any
}