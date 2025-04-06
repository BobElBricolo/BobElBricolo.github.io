export class User {
    id!: string;
    username!: string;
    email!: string;
    profileImage?: string;
    bio?: string;
    createdAt: string;
    isPremium: boolean;

    constructor(id: string, username: string, email: string, createdAt: string, isPremium: boolean, profileImage?: string, bio?: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.profileImage = profileImage;
        this.bio = bio;
        this.createdAt = createdAt;
        this.isPremium = isPremium;
    }
}

// Contains the information necessary for the users available on the profile page (returned by the API)
export class UserName {
    id: string
    username!: string;
    profileImage?: string;

    constructor(id: string, username: string, profileImage?: string) {
        this.id = id;
        this.username = username;
        this.profileImage = profileImage;
    }
}

export class UserToConnect {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password
    }
}

export class UserToRegister {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
