import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }){
  if(todos.length===0){
    return (
      <ul className="mt-2">
        <li className="rounded-xl border border-app bg-card p-4 text-center text-muted">
          표시할 항목이 없습니다.
        </li>
      </ul>
    );
  }
  return (
    <ul className="space-y-2">
      {todos.map(t=>(
        <TodoItem key={t.id} todo={t} onToggle={()=>onToggle(t.id)} onDelete={()=>onDelete(t.id)} />
      ))}
    </ul>
  );
}
