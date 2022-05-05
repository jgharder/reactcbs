export class User {
    email: string;
    refreshToken: string;
    idToken: string;
   
    displayname?: string;
    photoUrl?: string
    

    constructor(email: string, refreshToken: string ,idToken: string,displayname?: string, photoUrl?: string) {
        this.email = email;
        this.refreshToken = refreshToken;

        this.idToken = idToken;
        this.displayname = displayname;
        this.photoUrl = photoUrl;
    }
}