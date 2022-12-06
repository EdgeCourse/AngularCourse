export class Publication {
    constructor(public ISBN: string, 
        public year: number, 
        public author: string, 
        public topic: string,
        public price: number,
        public featured: boolean,
        public photos: string[]) {
    }
}