import { IBien } from "./IBien";

export interface IMessage {
    lastname : string;
    firstname : string;
    message : string;
    email : string;
    bien: IBien;
    bienId: number;
}