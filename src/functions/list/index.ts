import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.list`,
  events: [
    {
      http: {
        method: "get",
        path: "clients",
      },
    },
  ],
};
