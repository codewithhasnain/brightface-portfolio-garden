import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Portrait } from "@/components/site/portrait";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SERVICES } from "@/components/site/services-data";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faisal Hameed — Medical Alert Specialist · Nishat Ventures" },
      {
        name: "description",
        content:
          "Peace of mind for the families who matter most. Faisal Hameed compares medical alert, Medicare and final expense options for US families, in plain language.",
      },
      { property: "og:title", content: "Faisal Hameed — Medical Alert Specialist" },
      {
        property: "og:description",
        content:
          "Honest, no-pressure comparisons for medical alert, Medicare and final expense — plus websites and AI tools for businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "5,000+", label: "families helped each year" },
  { value: "3", label: "coverage areas compared" },
  { value: "US", label: "market experience" },
  { value: "AI", label: "tools & modern web builds" },
];

const MARQUEE = ["Medical Alert", "Medicare", "Final Expense", "Web Development", "AI Tools", "Peace of mind"];

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesBento />
      <MedicalAlertTeaser />
      <QuoteBlock />
      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="under-header relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[44rem] rounded-full bg-glow" />
      <div className="pointer-events-none absolute -left-40 top-40 size-[30rem] rounded-full bg-aqua-glow" />
      <div className="pointer-events-none absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-16">
        <div>
          <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-semibold shadow-soft backdrop-blur">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            Faisal Hameed · Founder, Nishat Ventures
          </p>

          <h1
            className="mt-8 animate-rise text-[clamp(2.9rem,7.4vw,6.4rem)] font-medium leading-[0.95] tracking-tight"
            style={{ animationDelay: "120ms" }}
          >
            Peace of mind for the families who{" "}
            <span className="text-flourish highlight">matter most.</span>
          </h1>

          <p
            className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            I help US families compare medical alert systems, Medicare options and final expense
            coverage, in plain language and without pressure. I also build websites and AI-powered
            tools for businesses.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <Button asChild variant="hero" size="xl">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="ink" size="xl">
              <a href={CONTACT.phoneHref}>
                <Phone /> Call now
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={CONTACT.emailHref}>
                <Mail /> Email me
              </a>
            </Button>
          </div>

          <div className="mt-12 flex animate-rise items-center gap-4" style={{ animationDelay: "480ms" }}>
            <div className="flex -space-x-3">
              {["bg-primary-soft", "bg-aqua-soft", "bg-accent", "bg-secondary"].map((c, i) => (
                <span key={c} className={cn("grid size-10 place-items-center rounded-full border-2 border-background text-sm", c)}>
                  {["❤", "☂", "✦", "☎"][i]}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-lg font-semibold text-foreground">5,000+ families</span>
              <br />
              helped every year
            </p>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "200ms" }}>
          <Portrait />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative -rotate-1 border-y border-ink/10 bg-ink py-5 text-ink-foreground">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl italic sm:text-4xl">
            {t}
            <span className="text-primary not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="bg-card p-8 sm:p-10">
            <p className="font-display text-5xl font-semibold tracking-tight text-primary-deep sm:text-6xl">
              {s.value}
            </p>
            <p className="mt-3 font-semibold text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesBento() {
  const featured = SERVICES[0]!;
  const rest = SERVICES.slice(1);
  const FeaturedIcon = featured.icon;
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Clear guidance, honest comparisons, <span className="text-flourish">real results.</span>
            </>
          }
        />
        <Button asChild variant="soft" size="lg">
          <Link to="/services">
            All services <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="grain relative overflow-hidden rounded-[2rem] bg-primary-soft p-8 sm:p-10 md:col-span-2 lg:row-span-2 lg:col-span-1">
          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-sun opacity-90" />
          <div className="relative flex h-full flex-col">
            <span className="eyebrow w-fit rounded-full bg-card px-3 py-1.5 text-primary-deep">{featured.tag}</span>
            <FeaturedIcon className="mt-10 size-12 text-primary-deep" strokeWidth={1.5} />
            <h3 className="mt-6 text-4xl font-medium leading-tight">{featured.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">{featured.description}</p>
            <div className="mt-auto pt-10">
              <Button asChild variant="ink" size="xl">
                <Link to="/medical-alert">
                  How I help <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {rest.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.key}
              delay={(i + 1) * 90}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "grid size-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110",
                    i % 2 === 0 ? "bg-aqua-soft text-secondary-foreground" : "bg-accent text-accent-foreground",
                  )}
                >
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-deep" />
              </div>
              <h3 className="mt-8 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function MedicalAlertTeaser() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="grid items-center gap-12 rounded-[2.5rem] bg-aqua-soft p-8 sm:p-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-secondary-foreground">Medical Alert</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] sm:text-6xl">
            One button can make <span className="text-flourish">all the difference.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">
            Most falls at home happen when no one is around. A good medical alert system means help
            is one press away, any time of day. My job is to make sure your family gets the right
            system at the right price, without confusion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle /> Ask about medical alert
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <Link to="/medical-alert">
                See the process <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative grid place-items-center py-6">
          <div className="relative grid size-64 place-items-center sm:size-80">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/20 [animation-duration:2.6s]" />
            <span className="absolute inset-6 rounded-full bg-primary/15" />
            <span className="absolute inset-12 rounded-full bg-card shadow-lift" />
            <span className="relative grid size-32 place-items-center rounded-full bg-sun font-display text-2xl font-semibold text-primary-foreground shadow-sun sm:size-40 sm:text-3xl">
              HELP
            </span>
          </div>
          <p className="mt-6 eyebrow text-secondary-foreground">One press · 24/7</p>
        </Reveal>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className="mx-auto mt-28 max-w-5xl px-6 text-center">
      <Reveal>
        <Quote className="mx-auto size-12 text-primary" strokeWidth={1.25} />
        <blockquote className="mt-8 font-display text-3xl font-light italic leading-snug sm:text-5xl">
          Every call is a family looking for safety and peace of mind.{" "}
          <span className="highlight not-italic font-medium">I treat it that way, every time.</span>
        </blockquote>
        <p className="mt-8 eyebrow text-muted-foreground">— Faisal Hameed</p>
      </Reveal>
    </section>
  );
}
