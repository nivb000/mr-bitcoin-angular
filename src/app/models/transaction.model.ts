export class Transaction {

    constructor(
        public amount: number | undefined,
        public fromName: string | undefined,
        public toName: string | undefined,
        public at: Date | string | undefined) 
        {

        }
}

