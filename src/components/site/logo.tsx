import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Nishat Ventures home">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-2xl bg-sun font-display text-xl font-semibold text-primary-foreground shadow-sun transition-transform duration-500 group-hover:rotate-[-8deg]">
        N
        <span className="absolute -right-1 -top-1 size-3 rounded-full bg-butter" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold tracking-tight">Nishat Ventures</span>
        <span className="eyebrow mt-1 block text-[0.6rem] text-muted-foreground">by Faisal Hameed</span>
      </span>
    </Link>
  );
}
