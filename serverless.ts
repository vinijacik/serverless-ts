import type { AWS } from '@serverless/typescript';

import healthCheck from '@functions/healthCheck';
import create from '@functions/client/create';
import list from '@functions/client/list';
import update from '@functions/client/update';
import del from '@functions/client/del';
import get from '@functions/client/get';

const serverlessConfiguration: AWS = {
  service: 'serverlessApi',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'sa-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      // DBHOSTNAME: "sandbox.cam16aauvilv.sa-east-1.rds.amazonaws.com",
      // port: "5432",
      // database: "postgres",
      // username: "postgres",
      // password: "Z0HAgPsVj7jpS3a7",
      // schema: "public",
    },
  },
  // import the function via paths
  functions: { healthCheck, create, list, update, del, get },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk', 'pg-native'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
