import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1556353041535 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `description` text NOT NULL, `filename` varchar(255) NOT NULL, `views` double NOT NULL, `isPublished` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
