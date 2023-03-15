import { getDatabaseConnection } from "@database/connection";
import client from "@entities/client";

export const clientRepository = async () => {
  try {
    const conn = await getDatabaseConnection();
    return conn.getRepository(client);
  } catch (e) {
    throw e;
  }
};
