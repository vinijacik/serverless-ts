import {
  formatJSONResponse, ValidatedEventAPIGatewayProxyEvent,
} from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import schema from "./schema";

const _healthCheck: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (): Promise<APIGatewayProxyResult> => {
  try {
    return formatJSONResponse(200, {
      hello: 'world'
    });
  } catch (e) {
    return formatJSONResponse(500, e);
  }
};

export const healthCheck = middyfy(_healthCheck);
