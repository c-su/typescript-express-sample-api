import { BaseRepository } from "./base-repository";
import { IUserRepository } from "../domain/repository/i-user-repository";
import { User } from "../domain/entity/user";

export class UserRepository extends BaseRepository<User>
  implements IUserRepository {
  constructor(entityName: string) {
    super(entityName);
  }

  async createUser(name: string, desc: string, file: string): Promise<boolean> {
    try {
      await this.getRepository();
      const user = new User(name, desc, file, 3.0);
      await this.repository.save(user);
      await this.closeConnection();
      return true;
    } catch (err) {
      throw err;
    }
  }

  async findUserById(id: number): Promise<User | undefined> {
    try {
      await this.getRepository();
      const user = await this.repository.findOne(id);
      await this.closeConnection();
      return user;
    } catch (err) {
      throw err;
    }
  }

  async removeUserById(id: number): Promise<boolean> {
    try {
      await this.getRepository();

      const user = await this.repository.findOne(id);
      if (typeof user === "undefined") return false;
      await this.repository.remove(user);

      await this.closeConnection();
      return true;
    } catch (err) {
      throw err;
    }
  }

  async updateUserById(id: number, name: string): Promise<boolean> {
    try {
      await this.getRepository();

      const user = await this.repository.findOne(id);
      if (typeof user === "undefined") return false;
      user.name = name || "";
      await this.repository.save(user);

      await this.closeConnection();
      return true;
    } catch (err) {
      throw err;
    }
  }
}
