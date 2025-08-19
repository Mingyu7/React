import { useState } from "react";

export default function TodoInput({ onAdd }){
  const [value,setValue] = useState("");
  const submit = () => { if(!value.trim()) return; onAdd(value); setValue(""); };

  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        className="flex-1 rounded-xl border border-app bg-card px-4 py-3 outline-none text-app placeholder:text-muted
                   focus:border-transparent focus:ring-4 ring-accent transition"
        placeholder="할 일을 입력하고 Enter ⏎"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        onKeyDown={(e)=>e.key==="Enter"&&submit()}
        aria-label="할 일 입력"
      />
      <button
        onClick={submit}
        className="rounded-xl bg-accent px-4 py-3 text-white font-medium hover:opacity-90 active:translate-y-px transition"
      >
        추가
      </button>
    </div>
  );
}