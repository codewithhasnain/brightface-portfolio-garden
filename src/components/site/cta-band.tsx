import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { Reveal } from "./reveal";

export function CtaBand({
  title = "Let's talk. Pick whatever is easiest.",
}: {
  title?: string;
}) {
  return (
    <section className="px-4 sm:px-6">
      <Reveal className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sun px-6 py-16 text-primary-foreground shadow-sun sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-butter/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-primary-deep/40 blur-3xl" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow opacity-80">Get in touch</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.02] sm:text-6xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg opacity-90">
              Quick replies on WhatsApp, phone and email — no pressure, just clear answers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="ink" size="xl" className="justify-between">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-2"><MessageCircle /> Chat on WhatsApp</span>
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl" className="justify-between">
              <a href={CONTACT.phoneHref}>
                <span className="flex items-center gap-2"><Phone /> Call {CONTACT.phoneDisplay}</span>
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl" className="justify-between">
              <a href={CONTACT.emailHref}>
                <span className="flex items-center gap-2"><Mail /> Email me</span>
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
