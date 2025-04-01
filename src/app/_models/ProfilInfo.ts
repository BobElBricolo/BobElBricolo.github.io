export class ProfilInfo {
    id!: string;
    username!: string;
    email!: string;
    profileImage?: string;
    bio?: string;
    createdAt: string;

    constructor(id: string, username: string, email: string, createdAt: string, profileImage?: string, bio?: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.profileImage = profileImage;
        this.bio = bio;
        this.createdAt = createdAt;
        }
}
