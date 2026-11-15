import { HeartHandshake, Sparkles } from "lucide-react";

import portrait from "@/assets/faisal-hameed-portrait.png.asset.json";
import { cn } from "@/lib/utils";

function RotatingBadge() {
  return (
    <div className="absolute -left-6 bottom-24 z-20 grid size-32 place-items-center rounded-full bg-card shadow-lift sm:-left-10 sm:size-36">
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-foreground font-sans text-[9.5px] font-bold uppercase">
          <textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">Medical Alert Specialist • 5,000+ families • </textPath>
        </text>
      </svg>
      <span className="grid size-14 place-items-center rounded-full bg-sun font-display text-lg font-semibold text-primary-foreground">
        FH
      </span>
    </div>
  );
}

export function Portrait({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[30rem]", className)}>
      {/* sun disc + rings */}
      <div className="absolute left-1/2 top-[6%] aspect-square w-[92%] -translate-x-1/2 rounded-full bg-sun" />
      <div className="absolute left-1/2 top-[2%] aspect-square w-[104%] -translate-x-1/2 rounded-full border border-dashed border-primary/40" />
      <div className="absolute -right-4 top-10 size-20 rounded-full bg-butter sm:size-24" />
      <div className="absolute -left-2 top-1/3 size-10 rounded-full bg-aqua" />

      {/* arch photo */}
      <div className="relative z-10 mx-auto w-[82%] overflow-hidden arch border-[6px] border-card bg-card shadow-lift">
        <img
          src={portrait.url}
          alt="Faisal Hameed, founder of Nishat Ventures, at his desk with a headset"
          width={512}
          height={640}
          className="aspect-[4/5] w-full object-cover object-top"
          fetchPriority="high"
        />
      </div>

      {!compact && <RotatingBadge />}

      {/* floating stat */}
      <div
        className="absolute -right-2 bottom-10 z-20 w-64 animate-float rounded-3xl border border-border bg-card/95 p-4 shadow-lift backdrop-blur sm:-right-8"
        style={{ ["--tilt" as string]: "3deg" }}
      >
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
            <HeartHandshake className="size-5" />
          </span>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">5,000+</p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">families helped every year</p>
          </div>
        </div>
      </div>

      {!compact && (
        <div
          className="absolute right-6 top-4 z-20 flex animate-float-delayed items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground shadow-lift"
          style={{ ["--tilt" as string]: "-4deg" }}
        >
          <Sparkles className="size-4 text-butter" /> US market experience
        </div>
      )}
    </div>
  );
}
