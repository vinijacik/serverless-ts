import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.update`,
  events: [
    {
      http: {
        method: "patch",
        path: "client/{id}",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        cors: {
          origin: "*",
        },
      },
    },
  ],
};
