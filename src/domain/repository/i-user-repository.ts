import { User } from "../entity/user";

export interface IUserRepository {
  saveUser(user: User): Promise<boolean>;
  findUserById(id: number): Promise<User | undefined>;
  removeUser(user: User): Promise<boolean>;
}
