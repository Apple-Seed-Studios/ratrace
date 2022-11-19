import { rest } from 'msw'
import { tasks } from "../__fixtures__"

const API_SERVER = process.env.REACT_APP_SERVER;
const server = `${API_SERVER}/api/v1`;

export const handlers = [
  rest.get(server + "/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),

  rest.post(server + "/tasks", (req, res, ctx) => { 
    return res(ctx.status(201), ctx.json(tasks[0]));
  } )
];