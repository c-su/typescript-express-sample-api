import { IUserRepository } from "../domain/repository/i-user-repository";
import { UserFactory } from "../domain/factory/user-factory";

export class UserApplicationService {
  repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async createUser(name: string, desc: string, file: string): Promise<boolean> {
    try {
      const factory = new UserFactory();
      const user = factory.createUser(name, desc, file);
      return this.repository.saveUser(user);
    } catch (err) {
      throw err;
    }
  }

  async updateUser(id: number, name: string): Promise<boolean> {
    try {
      const user = await this.repository.findUserById(id);
      if (typeof user === "undefined") return false;

      user.name = name;

      return await this.repository.saveUser(user);
    } catch (err) {
      throw err;
    }
  }

  async findUser(id: number): Promise<object> {
    try {
      const user = await this.repository.findUserById(id);
      if (typeof user === "undefined") return {};
      return {
        name: user.name,
        desc: user.description,
        views: user.views
      };
    } catch (err) {
      throw err;
    }
  }

  async removeUser(id: number) {
    try {
      const user = await this.repository.findUserById(id);
      if (typeof user === "undefined") return false;
      return await this.repository.removeUser(user);
    } catch (err) {
      throw err;
    }
  }
}
