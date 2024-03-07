import { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

export enum HatSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export const hatSchema = Type.Object({
  name: Type.String(),
  size: Type.Enum(HatSize),
});

export const hatResponseSchema = Type.Object({
  hats: Type.Array(hatSchema),
});

export type Hat = Static<typeof hatSchema>;

export default async function hatsController(fastify: FastifyInstance) {
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/hats',
    {
      schema: {
        response: { 200: hatResponseSchema },
      },
    },
    async function () {
      return {
        hats: [
          {
            name: 'balaclava',
            size: HatSize.SMALL,
          },
          { name: 'top', size: HatSize.LARGE },
        ],
      };
    }
  );
}
