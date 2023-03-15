import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { clientRepository } from "@repositories/clientRepository";

import schema from "./schema";

const _del: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const repository = await clientRepository();
    await repository.delete(event.pathParameters);
    //await repository.softDelete(event.pathParameters);
    return formatJSONResponse(204);
  } catch (e) {
    return formatJSONResponse(400, { error: e.detail });
  }
};

export const del = middyfy(_del);
