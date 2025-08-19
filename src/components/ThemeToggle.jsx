import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const dark = mode === "dark";
  return (
    <button
      onClick={toggleMode}
      className="inline-flex items-center gap-2 rounded-full border border-app bg-card px-3 py-2 text-sm hover:bg-accent-weak transition"
      title="라이트/다크 전환"
    >
      <span className={`inline-block h-3 w-3 rounded-full ${dark ? "bg-yellow-300" : "bg-zinc-800"}`}/>
      {dark ? "Dark" : "Light"}
    </button>
  );
}