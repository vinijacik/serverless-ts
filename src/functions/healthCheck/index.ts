import { handlerPath } from "@libs/handlerResolver";
export default {
  handler: `${handlerPath(__dirname)}/handler.healthCheck`,
  events: [
    {
      http: {
        method: "get",
        path: "healthCheck",
        cors: {
          origin: "*",
        },
      },
    },
  ],
};
