export interface News {
    id: number;
    title: string;
    body: string;
    author: string;
    time: string;
    isEdit?: boolean;
    image?:string;
}