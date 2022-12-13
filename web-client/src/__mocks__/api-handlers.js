import { rest } from "msw";

const API_SERVER = process.env.REACT_APP_API_SERVER || "http://localhost";
// const server = `${API_SERVER}/api/v1`;
const server = API_SERVER;

export const createHandlers = (tasks) => {
  tasks = [...tasks];
  const handlers = [
    rest.get(server + "/tasks", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(tasks));
    }),

    rest.post(server + "/tasks", async (req, res, ctx) => {
      const task = await req.json();
      return res(ctx.status(201), ctx.json(task));
    }),

    rest.put(server + "/tasks/:id", async (req, res, ctx) => {
      const { id } = req.params;
      const updates = await req.json();
      const task = tasks.find((t) => t._id === id);
      const returnVal = { ...task, ...updates };

      return res(ctx.status(200), ctx.json(returnVal));
    }),

    rest.delete(server + "/tasks/:id", async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          acknowledged: true,
          deletedCount: 1,
        })
      );
    }),
  ];
  return handlers;
};
