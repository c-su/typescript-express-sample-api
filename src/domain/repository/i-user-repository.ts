import { User } from "../entity/user";

export interface IUserRepository {
  createUser(name: string, desc: string, file: string): Promise<boolean>;
  findUserById(id: number): Promise<User | undefined>;
  removeUserById(id: number): Promise<boolean>;
  updateUserById(id: number, name: string): Promise<boolean>;
}
