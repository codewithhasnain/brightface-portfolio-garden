import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Faisal Hameed — WhatsApp, Call or Email | Nishat Ventures" },
      {
        name: "description",
        content:
          "Reach Faisal Hameed on WhatsApp or by phone at +92 340 8445841, or email faisalkhandurrani577@gmail.com.",
      },
      { property: "og:title", content: "Let's talk — Faisal Hameed" },
      {
        property: "og:description",
        content: "WhatsApp, call or email. Pick whatever is easiest.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phoneDisplay,
    cta: "Start chat",
    href: CONTACT.whatsappHref,
    external: true,
    tone: "bg-sun text-primary-foreground shadow-sun",
    iconTone: "bg-card/25",
  },
  {
    icon: Phone,
    label: "Call",
    value: CONTACT.phoneDisplay,
    cta: "Call now",
    href: CONTACT.phoneHref,
    external: false,
    tone: "bg-aqua-soft text-foreground",
    iconTone: "bg-card",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    cta: "Send email",
    href: CONTACT.emailHref,
    external: false,
    tone: "bg-accent text-foreground",
    iconTone: "bg-card",
  },
];

async function copy(text: string, what: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${what} copied`);
  } catch {
    toast.error("Couldn't copy — please select and copy it manually.");
  }
}

function ContactPage() {
  return (
    <section className="under-header relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[40rem] rounded-full bg-glow" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-aqua-glow" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let's talk. <span className="text-flourish highlight">Pick whatever is easiest.</span>
            </>
          }
          intro="Quick replies on WhatsApp, phone and email — honest answers, no pressure."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className={`group flex h-full flex-col rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${c.tone}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`grid size-14 place-items-center rounded-2xl ${c.iconTone}`}>
                    <c.icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="mt-12 eyebrow opacity-75">{c.label}</p>
                <p className="mt-2 break-all font-display text-2xl font-medium sm:text-3xl">{c.value}</p>
                <p className="mt-8 font-semibold underline decoration-2 underline-offset-4">{c.cta} →</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="soft" size="xl" onClick={() => copy(CONTACT.email, "Email")}>
            <Copy /> Copy email
          </Button>
          <Button variant="soft" size="xl" onClick={() => copy(CONTACT.phoneDisplay, "Phone number")}>
            <Copy /> Copy phone number
          </Button>
        </div>
      </div>
    </section>
  );
}
