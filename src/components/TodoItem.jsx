export default function TodoItem({ todo, onToggle, onDelete }){
  return (
    <li className="flex items-center justify-between rounded-xl border border-app bg-card px-4 py-3">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="h-5 w-5 accent-[var(--accent)]"
          aria-label="완료 전환"
        />
        <span className={`text-base ${todo.completed ? "line-through text-muted" : ""}`}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={onDelete}
        className="h-8 w-8 rounded-lg bg-[var(--danger-bg)] text-[var(--danger)] text-lg leading-none hover:opacity-90 active:translate-y-px transition"
        aria-label="삭제"
      >
        ×
      </button>
    </li>
  );
}