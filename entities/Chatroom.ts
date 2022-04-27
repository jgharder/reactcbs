import { Message } from "./Message";

export class Chatroom {
  constructor(
    public message: Message,
    public timestamp: Date,
    public id?: string
  ) {}
}

export enum Status {
  READ = "READ",
  UNREAD = "UNREAD",
}
