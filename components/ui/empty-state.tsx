import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
      <SearchX className="mx-auto h-10 w-10 text-slate-400" aria-hidden="true" />
      <h3 className="mt-4 font-display text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}
