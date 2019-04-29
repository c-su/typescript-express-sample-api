import { Connection, createConnection, Repository } from "typeorm";

export class BaseRepository<T> {
  private connection!: Connection;
  protected repository!: Repository<T>;
  protected entityName!: string;

  constructor(entityName: string) {
    this.entityName = entityName;
  }

  protected async closeConnection() {
    this.connection.close();
  }

  protected async getRepository() {
    this.connection = await createConnection();
    this.repository = this.connection.getRepository(this.entityName);
  }
}
