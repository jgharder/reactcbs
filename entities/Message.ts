export class Message {
  constructor(
    public title: string,
    public status: Status,
    public text: string,
    public timestamp: Date
  ) {}
}

export enum Status {
  READ = "READ",
  UNREAD = "UNREAD",
}
