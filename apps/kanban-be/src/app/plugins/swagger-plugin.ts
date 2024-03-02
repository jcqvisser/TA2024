import fastifySwagger from '@fastify/swagger';
import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(fastifySwagger, {});
});
