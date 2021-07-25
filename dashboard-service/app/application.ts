import fastify, { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { usersDb } from "./db/users.db";
import fastifyCors from "fastify-cors";

/**
 * Define an initialise fastify server
 */
export const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify();

/**
 * Configure default CORS setting. No additional requirements for CORS
 * Both client and server running on localhost
 * Define users GET endpoint
 */
function build(): void {
  server.register(fastifyCors);

  server.get("/api/dashboard/users", async () => {
    return usersDb;
  });
}

export default build;
