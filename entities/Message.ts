
export class Message {
    constructor(public title: string, public status: Status,
        public message: string, public timestamp: Date) { }
}

export enum Status {
    READ = "READ", UNREAD = "UNREAD"
}