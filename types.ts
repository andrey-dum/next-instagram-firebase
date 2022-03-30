import { Timestamp } from "firebase/firestore";

export interface IPost {
    id: string;
    username: string;
    profileImg: string;
    image: string;
    caption: string;
    timestamp: Timestamp;
    likes?: number | string;
}

           
export interface IComment {
    id: string;
    text: string;
    userImage: string;
    username: string;
    timestamp: Timestamp;
}
