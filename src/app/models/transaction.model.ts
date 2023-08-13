/* todo - why do you need all those models? */
export class Transaction {

    constructor(
        public amount: number | undefined,
        public fromName: string | undefined,
        public toId: string | undefined,
        public at: Date | string | undefined)
        {

        }
}

