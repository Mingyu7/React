export default function FilterBar({ filter, setFilter, remaining, hasCompleted, onClearCompleted }){
  const Tab = (k,l)=>(
    <button
      key={k}
      onClick={()=>setFilter(k)}
      className={`px-3 py-2 text-sm rounded-lg border border-app bg-card hover:bg-accent-weak transition ${filter===k?"ring-accent":""}`}
      aria-selected={filter===k}
      role="tab"
    >{l}</button>
  );

  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="text-sm text-muted">남은 일: <span className="font-medium">{remaining}</span>개</span>
      <div className="ml-auto inline-flex items-center gap-2" role="tablist" aria-label="필터">
        {Tab("all","전체")}
        {Tab("active","미완료")}
        {Tab("completed","완료")}
        <button
          onClick={onClearCompleted}
          disabled={!hasCompleted}
          className="px-3 py-2 text-sm rounded-lg border border-app bg-card hover:bg-accent-weak disabled:opacity-50 disabled:cursor-not-allowed transition"
        >완료 비우기</button>
      </div>
    </div>
  );
}