import { IKyc } from "Types/Types";

export interface IRoom {
    id: string;
    userId: string;
    name: string;
    index: string;
    modifier: string;
    type: string;
    capacity: number;
    realm: number;
    active: boolean

}