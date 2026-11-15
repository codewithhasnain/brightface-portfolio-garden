import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SERVICES } from "@/components/site/services-data";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Medical Alert, Medicare, Final Expense, Web & AI | Nishat Ventures" },
      {
        name: "description",
        content:
          "Medical alert systems, Medicare and final expense comparisons for US families, plus web development and advanced AI tools for businesses.",
      },
      { property: "og:title", content: "Services by Faisal Hameed · Nishat Ventures" },
      {
        property: "og:description",
        content: "Clear guidance, honest comparisons, real results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const TONES = ["bg-primary-soft", "bg-aqua-soft", "bg-accent", "bg-secondary", "bg-paper"];

function ServicesPage() {
  return (
    <>
      <section className="under-header relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[40rem] rounded-full bg-glow" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">
          <SectionHeading
            eyebrow="What I do"
            title={
              <>
                Clear guidance, honest comparisons, <span className="text-flourish highlight">real results.</span>
              </>
            }
            intro="Five ways I help — three for families protecting the people they love, two for businesses that want to grow."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-5 px-6">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.key}
              className={cn(
                "grid gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[auto_1fr_1fr] lg:items-center",
                TONES[i],
              )}
            >
              <div className="flex items-center gap-5 lg:block">
                <span className="font-display text-6xl font-light text-foreground/25">0{i + 1}</span>
                <span className="grid size-16 place-items-center rounded-2xl bg-card shadow-soft lg:mt-4">
                  <Icon className="size-7 text-primary-deep" strokeWidth={1.5} />
                </span>
              </div>
              <div>
                {s.tag && (
                  <span className="eyebrow mb-3 inline-block rounded-full bg-card px-3 py-1.5 text-primary-deep">
                    {s.tag}
                  </span>
                )}
                <h2 className="text-3xl font-medium sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/75">{s.description}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 rounded-2xl bg-card/80 px-4 py-3 font-semibold">
                    <Check className="size-4 shrink-0 text-primary-deep" /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
        <div className="flex justify-center pt-6">
          <Button asChild variant="hero" size="xl">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle /> Ask me anything on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}
