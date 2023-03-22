import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { clientRepository } from "@repositories/clientRepository";
import schema from "./schema";

const _get: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const repository = await clientRepository();
    const client = await repository.findOneBy(event.pathParameters);

    if (!client) return formatJSONResponse(404, {});
    return formatJSONResponse(200, client);
  } catch (e) {
    return formatJSONResponse(400, { error: e.detail });
  }
};

export const get = middyfy(_get);
