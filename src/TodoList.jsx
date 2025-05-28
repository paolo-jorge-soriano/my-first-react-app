const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the dog", id: crypto.randomUUID() },
];

export default function TodoList() {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}
