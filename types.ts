export interface IPost {
    id: string;
    username: string;
    profileImg: string;
    image: string;
    caption: string;
    timestamp: string;
    likes?: number | string;
}
