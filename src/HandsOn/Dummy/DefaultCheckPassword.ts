import {CheckPassword} from "./Types";

export class DefaultCheckedPassword implements CheckPassword{
  check(password: String): void {
    if (password !== 'correctPassword') {
      throw new Error("間違ったパスワードです")
    }
  }
}