// src/mocks/server.js
import { setupServer } from 'msw/node'
import { tasks } from "../__fixtures__"
import { createHandlers } from './api-handlers'
const handlers = createHandlers(tasks);

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)