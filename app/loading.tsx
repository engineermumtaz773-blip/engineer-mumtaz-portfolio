export default function Loading() {
  return <div className="min-h-screen bg-white pt-32" aria-label="Loading page"><div className="container-shell animate-pulse"><div className="h-8 w-40 rounded-full bg-slate-100" /><div className="mt-6 h-16 max-w-3xl rounded-2xl bg-slate-100" /><div className="mt-4 h-6 max-w-xl rounded-xl bg-slate-100" /><div className="mt-16 grid gap-6 md:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-72 rounded-[24px] bg-slate-100" />)}</div></div></div>;
}
