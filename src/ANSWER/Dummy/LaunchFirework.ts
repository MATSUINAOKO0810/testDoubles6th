import { LaunchFireworkSystem, Firework, CheckPassword } from './Types'

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    password: string
    firework: Firework
    checkPassword: CheckPassword

    constructor(firework: Firework, checkPassword:CheckPassword, password: string) {
        this.firework = firework
        this.checkPassword= checkPassword
        this.password = password
    }

    validationCheck() {
        this.checkPassword.check(this.password)
    }
    launch() {
        this.validationCheck()
        this.firework.fire()
    }
}