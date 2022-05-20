export class User {
  email?: string;
  refreshToken?: string;
  idToken?: string;

  displayName?: string;
  photoUrl?: string;

  constructor(
    email?: string,
    refreshToken?: string,
    idToken?: string,
    displayName?: string,
    photoUrl?: string
  ) {
    this.email = email;
    this.refreshToken = refreshToken;

    this.idToken = idToken;
    this.displayName = displayName;
    this.photoUrl = photoUrl;
  }
}
