export interface User {
    name: string;
    code: string;
    image: string;
    childs?: User[];
}
