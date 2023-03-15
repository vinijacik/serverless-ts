import { getDatabaseConnection } from "@database/connection";
import {
  formatJSONResponse, ValidatedEventAPIGatewayProxyEvent,
} from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import schema from "./schema";

const _healthCheck: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (): Promise<APIGatewayProxyResult> => {
  try {
    await getDatabaseConnection();
    return formatJSONResponse(200, {
      health: true,
      databaseConnection: true,
    });
  } catch (e) {
    return formatJSONResponse(500, {
      health: true,
      databaseConnection: false,
    });
  }
};

export const healthCheck = middyfy(_healthCheck);
