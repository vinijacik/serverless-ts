import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { listFormatter } from "@libs/listFormatter";
import { clientRepository } from "@repositories/clientRepository";
import client from "@entities/client";

import schema from "./schema";

const _list: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const { offset, limit } = event.queryStringParameters || {};

    const repository = await clientRepository();
    const clients = await repository.findAndCount({
      skip: Number(offset ?? 0),
      take: Number(limit ?? 10),
      // se usar soft delete, use true para listar os deletados
      // withDeleted: true
    });

    return formatJSONResponse(200, listFormatter<client>(clients));
  } catch (e) {
    console.log(e);
    return formatJSONResponse(400, { error: e.detail });
  }
};

export const list = middyfy(_list);
