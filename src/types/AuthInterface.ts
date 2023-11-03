export interface Login {
    email: string;
    password: string;
}

export interface SignUp {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface AuthInterface {
    login: Login
    signUp: SignUp
}