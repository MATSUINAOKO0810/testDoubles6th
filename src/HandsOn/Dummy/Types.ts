export type Firework = {
    fire: () => void
}

export type CheckPassword = {
    check: (password: String) => void
}

export type LaunchFireworkSystem = {
    firework: Firework
    checkPassword: CheckPassword
    password: string
    validationCheck: () => void
    launch: () => void
}
