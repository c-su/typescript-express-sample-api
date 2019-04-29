import { User } from "../entity/user";

export class UserFactory {
  createUser(name: string, desc: string, file: string) {
    return new User(name || "", desc || "", file || "", 3.0);
  }
}
