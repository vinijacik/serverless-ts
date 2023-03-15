import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { clientRepository } from "@repositories/clientRepository";
import schema from "./schema";

const _update: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const id = Number(event.pathParameters.id);

    const repository = await clientRepository();
    const newClient = repository.create(event.body);

    await repository.update({ id }, newClient);
    return formatJSONResponse(204);
  } catch (e) {
    return formatJSONResponse(400, { error: e.detail });
  }
};

export const update = middyfy(_update);
