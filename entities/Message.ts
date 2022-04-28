export class Message {
  constructor(
    public title: string,
    public status: Status,
    public text: string,
    public timestamp: Date,
    public id?: string
  ) {}
}

export enum Status {
  READ = "READ",
  UNREAD = "UNREAD",
}
