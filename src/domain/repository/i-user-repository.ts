import { User } from "../entity/user";

export interface IUserRepository {
  saveUser(user: User): Promise<boolean>;
  findUserById(id: number): Promise<User | undefined>;
  removeUserById(id: number): Promise<boolean>;
}
