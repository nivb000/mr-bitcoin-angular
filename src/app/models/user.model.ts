export class User {

    constructor(
        public _id?: string,
        public fullName: string = '',
        public userName: string = '',
        public balance: number = 0,
        public transactions: Array<any> = []) {
    }
}

