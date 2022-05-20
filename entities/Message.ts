import { User } from "./User";

export class Message {
  constructor(
    public title: string,
    public status: Status,
    public timestamp: Date,
    public User?: User,
    public id?: string
  ) {}
}

export enum Status {
  READ = "READ",
  UNREAD = "UNREAD",
}
