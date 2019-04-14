import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1555229035153 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(100) NOT NULL, "description" text NOT NULL, "filename" varchar NOT NULL, "views" double NOT NULL, "isPublished" boolean NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
