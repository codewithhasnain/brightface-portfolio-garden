import { createFileRoute } from "@tanstack/react-router";
import { BellRing, MapPin, MessageCircle, Quote, ShieldPlus, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/medical-alert")({
  head: () => ({
    meta: [
      { title: "Medical Alert Systems — Compare with Faisal Hameed | Nishat Ventures" },
      {
        name: "description",
        content:
          "One button can make all the difference. Compare in-home and mobile GPS medical alert systems, fall detection and 24/7 monitoring at a fair monthly price.",
      },
      { property: "og:title", content: "One button can make all the difference." },
      {
        property: "og:description",
        content:
          "Get the right medical alert system for your loved one at the right price — without confusion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MedicalAlertPage,
});

const STEPS = [
  {
    n: "01",
    title: "Understand your needs",
    body: "We talk about lifestyle, health and home setup: does your loved one stay home or go out often?",
  },
  {
    n: "02",
    title: "Compare the options",
    body: "In-home vs. mobile GPS, fall detection, 24/7 monitoring and the true monthly cost, side by side.",
  },
  {
    n: "03",
    title: "Get protected",
    body: "You choose with confidence, and I help you get set up so the whole family has peace of mind.",
  },
];

const FEATURES = [
  { icon: BellRing, label: "In-home systems" },
  { icon: MapPin, label: "Mobile GPS" },
  { icon: ShieldPlus, label: "Fall detection & 24/7 monitoring" },
  { icon: Wallet, label: "Fair monthly pricing" },
];

function MedicalAlertPage() {
  return (
    <>
      <section className="under-header relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-20 size-[36rem] rounded-full bg-aqua-glow" />
        <div className="pointer-events-none absolute -right-40 top-20 size-[36rem] rounded-full bg-glow" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Medical Alert · My specialty"
              title={
                <>
                  One button can make <span className="text-flourish highlight">all the difference.</span>
                </>
              }
              intro="Most falls at home happen when no one is around. A good medical alert system means help is one press away, any time of day. My job is to make sure your family gets the right system at the right price, without confusion."
            />
            <Button asChild variant="hero" size="xl" className="mt-10">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle /> Ask about medical alert
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 90}
                className={
                  "rounded-[1.75rem] border border-border bg-card p-6 shadow-soft " +
                  (i % 2 === 1 ? "translate-y-8" : "")
                }
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-sun text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-6 font-display text-xl font-medium leading-tight">{f.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10">
        <SectionHeading eyebrow="How it works" title="Three simple steps." align="center" />
        <ol className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden border-t-2 border-dashed border-primary/30 lg:block" />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="relative rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <span className="relative grid size-16 place-items-center rounded-full bg-sun font-display text-2xl font-semibold text-primary-foreground shadow-sun">
                {s.n}
              </span>
              <h3 className="mt-8 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-28 max-w-5xl px-6 text-center">
        <Reveal className="rounded-[2.5rem] bg-accent px-6 py-16 sm:px-16">
          <Quote className="mx-auto size-10 text-primary-deep" strokeWidth={1.25} />
          <blockquote className="mt-6 font-display text-3xl font-light italic leading-snug sm:text-4xl">
            Every call is a family looking for safety and peace of mind. I treat it that way, every time.
          </blockquote>
          <p className="mt-6 eyebrow text-muted-foreground">— Faisal Hameed</p>
        </Reveal>
      </section>

      <div className="mt-24">
        <CtaBand title="Ready to protect someone you love?" />
      </div>
    </>
  );
}
