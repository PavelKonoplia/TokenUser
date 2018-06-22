export class User {
    constructor(
        public Id: number,
        public Email: string,
        public UserName: string,
        public PasswordHash: string) {
    }
}
