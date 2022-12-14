const cheeseList = [
  "Cheddar",
  "Stilton",
  "Asiago",
  "Swiss",
  "Brie",
  "Colby",
  "Gouda",
];

const mockTodoCreator = (cheese, idx) => {
  return {
    _id: "abcde" + idx,
    task_name: `Buy ${cheese} cheese`,
    task_description: `get ${cheese} from the local store`,
    completed: false,
    tag: idx % 3 ? (idx % 3 === 1 ? "school" : "job") : "exercise",
    tracked_time: idx % 3 ? 100000 : 150000,
    __v: 0,
  };
};

export const tasks = cheeseList.map(mockTodoCreator);
