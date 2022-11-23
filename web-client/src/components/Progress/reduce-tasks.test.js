import { reduceTasks } from "./reduce-tasks";
import { tasks } from "../../__fixtures__";

describe('reduceTasks fn', () => {
  test('should convert a list of tasks to an object with sum totals of the time spent on each task', () => {
    const data = reduceTasks(tasks);
    expect(data).toEqual(expect.objectContaining({"job": 200000}))
    expect(data).toEqual(expect.objectContaining({"exercise": 450000}))
    expect(data).toEqual(expect.objectContaining({"school": 200000}))
  });
});