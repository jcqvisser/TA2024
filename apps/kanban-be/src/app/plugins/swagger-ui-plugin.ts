import swaggerUI from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(swaggerUI, {
    routePrefix: '/swagger',
  });
});
