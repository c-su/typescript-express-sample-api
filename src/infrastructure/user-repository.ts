import { BaseRepository } from "./base-repository";
import { IUserRepository } from "../domain/repository/i-user-repository";
import { User } from "../domain/entity/user";

export class UserRepository extends BaseRepository<User>
  implements IUserRepository {
  constructor(entityName: string) {
    super(entityName);
  }

  async findUserById(id: number): Promise<User | undefined> {
    await this.getRepository();
    const user = await this.repository.findOne(id);
    await this.closeConnection();
    return user;
  }
}
