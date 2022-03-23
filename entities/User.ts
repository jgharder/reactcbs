export class User {
    email: string;
    id: string;
    idToken: string;
   
    displayname?: string;
    photoUrl?: string
    

    constructor(email: string,id:string ,idToken: string,displayname?: string, photoUrl?: string) {
        this.email = email;
        this.id = id;

        this.idToken = idToken;
        this.displayname = displayname;
        this.photoUrl = photoUrl;
    }
}