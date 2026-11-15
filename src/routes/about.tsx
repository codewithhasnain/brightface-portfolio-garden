import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Portrait } from "@/components/site/portrait";
import { Reveal } from "@/components/site/reveal";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Faisal Hameed — Founder of Nishat Ventures" },
      {
        name: "description",
        content:
          "Faisal Hameed, founder of Nishat Ventures, helps about 5,000 US families a year compare medical alert, Medicare and final expense options, and builds web and AI tools.",
      },
      { property: "og:title", content: "Hi, I'm Faisal." },
      {
        property: "og:description",
        content: "Founder of Nishat Ventures — medical alert specialist, web developer and AI builder.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  "Honest, no-pressure comparisons",
  "Clear explanations in plain language",
  "Quick replies on WhatsApp, phone and email",
  "Modern websites and AI built for results",
];

function AboutPage() {
  return (
    <>
      <section className="under-header relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[40rem] rounded-full bg-glow" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-16 pt-16 lg:grid-cols-[1fr_1.15fr]">
          <div className="order-2 lg:order-1">
            <Portrait compact />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow flex items-center gap-3 text-primary-deep">
              <span className="h-px w-8 bg-primary" /> About me
            </p>
            <h1 className="mt-5 text-6xl font-medium leading-[0.95] sm:text-8xl">
              Hi, I'm <span className="text-flourish highlight">Faisal.</span>
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                I'm the founder of Nishat Ventures. My background is in the US market, where I
                compare medical alert, Medicare and final expense options for families. Medical
                alert is where I'm strongest: I help about{" "}
                <strong className="font-semibold text-foreground">5,000 families every year</strong>{" "}
                find the protection that fits them.
              </p>
              <p>
                I also work in web development and advanced AI tools, helping businesses build a
                strong online presence and automate their work.
              </p>
            </div>
            <Button asChild variant="hero" size="xl" className="mt-10">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle /> Say hello on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal
              key={v}
              delay={i * 90}
              className="rounded-[1.75rem] border border-border bg-card p-7 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-full bg-primary-soft text-primary-deep">
                <Check className="size-5" />
              </span>
              <p className="mt-6 font-display text-xl font-medium leading-snug">{v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}
