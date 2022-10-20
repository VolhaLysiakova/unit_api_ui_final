export class Registration {
    public emailField (email: string) : string {
        if (email.length >= 7 && email.indexOf('@') > -1) {
            return email
        } else {
            throw new Error ("Please enter valid email")
        }
    }

    public passwordField (password: string) : string {
        if (password.length >= 5 && password.length <= 15) {
            return password
        } else {
            throw new Error ("Please enter password from 5 to 15 symbols")
        }
    }

    public nickNameField (nickName: string) : string {
        if (nickName.length >= 3 && nickName.length <= 15) {
            return nickName
        } else {
            throw new Error ("Please enter nickname from 3 to 15 symbols")
        }
    }
}

