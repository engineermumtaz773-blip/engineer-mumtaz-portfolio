import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", dark }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge className={cn(dark && "border-white/15 bg-white/10 text-cyan-200")}>{eyebrow}</Badge>
      <h2 className={cn("mt-5 font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-balance sm:text-5xl", dark ? "text-white" : "text-navy")}>{title}</h2>
      {description ? <p className={cn("mt-5 text-base leading-8 sm:text-lg", dark ? "text-slate-300" : "text-slate-600")}>{description}</p> : null}
    </div>
  );
}
