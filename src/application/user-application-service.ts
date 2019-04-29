import { IUserRepository } from "../domain/repository/i-user-repository";

export class UserApplicationService {
  repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async insertUser(n: string, d: string, f: string): Promise<boolean> {
    try {
      const name = n || "";
      const desc = d || "";
      const file = f || "";
      return this.repository.createUser(name, desc, file);
    } catch (err) {
      throw err;
    }
  }

  async updateUser(id: number, name: string): Promise<boolean> {
    try {
      return await this.repository.updateUserById(id, name);
    } catch (err) {
      throw err;
    }
  }

  async selectUser(id: number): Promise<object> {
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

  async deleteUser(id: number) {
    try {
      return await this.repository.removeUserById(id);
    } catch (err) {
      throw err;
    }
  }
}
