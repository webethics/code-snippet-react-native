export interface Profile {
    lastName: string;
    firstName: string;
    email: string,
    image: string,
    address: string,
    phone_number: string
}

export interface UserInterface {
    profile: Profile,
    isLoggedIn: Boolean
    loginInProgress: Boolean
}