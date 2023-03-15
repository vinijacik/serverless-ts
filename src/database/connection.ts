import { DataSource, EntityManager } from "typeorm";
import { dataSource } from "./dataSource";

let ds: DataSource;

export const getDatabaseConnection = async (): Promise<EntityManager> => {
  try {
    if (ds && ds.isInitialized) {
      return ds.manager;
    } else {
      ds = dataSource;
      await ds.initialize();
      return ds.manager;
    }
  } catch (e) {
    throw new Error(e);
  }
};
