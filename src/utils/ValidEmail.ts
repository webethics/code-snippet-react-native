const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function isValidEmail(email: string) {
   return email.match(validRegex)
}