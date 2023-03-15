import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.create`,
  events: [
    {
      http: {
        method: "post",
        path: "client",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
