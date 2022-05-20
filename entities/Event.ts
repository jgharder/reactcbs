import { User } from "./User";

export class Event {
  constructor(
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public id?: string,
    public creator?: User
  ) {}
}
