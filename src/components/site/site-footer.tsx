import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { CONTACT } from "@/lib/contact";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-paper">
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] font-semibold leading-none tracking-tighter text-foreground/[0.04]">
        Nishat Ventures
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">
            Honest comparisons for medical alert, Medicare and final expense — plus modern websites
            and AI tools for businesses.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2 font-semibold">
            <li><Link to="/services" className="hover:text-primary-deep">Services</Link></li>
            <li><Link to="/medical-alert" className="hover:text-primary-deep">Medical Alert</Link></li>
            <li><Link to="/about" className="hover:text-primary-deep">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-deep">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Reach me</p>
          <ul className="mt-4 space-y-3 font-semibold">
            <li>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-deep">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-primary-deep">
                <Phone className="size-4" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="flex items-center gap-2 break-all hover:text-primary-deep">
                <Mail className="size-4 shrink-0" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl border-t border-border px-6 py-8 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">© 2026 Nishat Ventures · Faisal Hameed</p>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Nishat Ventures provides general information and comparison help. It is not affiliated
          with or endorsed by the U.S. government or the federal Medicare program. Plan
          availability, benefits and prices vary by provider and location.
        </p>
      </div>
    </footer>
  );
}
