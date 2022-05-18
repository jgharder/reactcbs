import {User} from "./User";

export class Event{
    constructor(
        public title?: string,
        public description?: string,
        public startDate?: string,
        public endDate?: string,
        public id?: string,
        public creator?: User,
    ){}
}