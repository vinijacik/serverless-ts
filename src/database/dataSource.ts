import { client1675398121029 } from "src/migrations/1675398121029-client";
import { DataSource } from "typeorm";
import { default as entities } from "../entities";

export const dataSource = new DataSource({
      applicationName: "serverlessApi",
      type: "postgres",
      host: "0.tcp.sa.ngrok.io",
      port: 19648,
      database: "dev_test",
      username: "postgres",
      password: "postgres",
      schema: "public",
      connectTimeoutMS: 8000,
      synchronize: false,
      logging: false,
      useUTC: true,
      entities,
      migrations: [client1675398121029]
    });