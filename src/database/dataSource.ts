import { DataSource } from "typeorm";
import { default as entities } from "../entities";
import { client1678969115034 } from "src/migrations/1678969115034-client";

export const dataSource = new DataSource({
      applicationName: "serverlessApi",
      type: "postgres",
      host: "0.tcp.sa.ngrok.io",
      port: 19648,
      database: "dev_test2",
      username: "postgres",
      password: "postgres",
      schema: "public",
      connectTimeoutMS: 8000,
      synchronize: false,
      logging: false,
      useUTC: true,
      entities,
      migrations: [client1678969115034]
    });