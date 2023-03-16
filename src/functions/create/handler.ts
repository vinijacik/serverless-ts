
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { clientRepository } from "@repositories/clientRepository";
import schema from "./schema";

const _create: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const repository = await clientRepository()
    const newClient = repository.create(event.body);
    const result = await repository.save(newClient);

    return formatJSONResponse(200, result);
  } catch (e) {
    console.log(e);
    return formatJSONResponse(400, { error: e.detail });
  }
};

export const create = middyfy(_create);
