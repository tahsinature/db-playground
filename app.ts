import { DataSource, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  firstName: string;
}

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "db",
  entities: [User],
});

const exec = async () => {
  await myDataSource.initialize();
  console.log("Connected to database");
};

exec();
