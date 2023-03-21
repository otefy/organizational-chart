export interface User {
    name: string;
    code: string;
    image: string;
    title: string;
    childs?: User[];
}