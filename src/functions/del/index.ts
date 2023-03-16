import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.del`,
  events: [
    {
      http: {
        method: "delete",
        path: "client/{id}",
        cors: {
          origin: "*",
        },
      },
    },
  ],
};
