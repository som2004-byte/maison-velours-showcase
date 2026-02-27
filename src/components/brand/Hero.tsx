import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";

export function Hero() {
  return (
    <Section className="mv-hero">
      <Container>
        <div className="mv-hero-inner">
          <p className="mv-hero-kicker">Maison Velours · Paris</p>
          <h1 className="mv-hero-title">Maison Velours</h1>
          <p className="mv-hero-subtitle">
            Silk on the skin, shadows in the air.
          </p>
          <p className="mv-hero-tagline">
            A collection of quietly luminous perfumes, crafted in small batches
            for those who prefer a whisper to a shout.
          </p>
          <div className="mv-hero-actions">
            <ButtonLink href="/products">Explore the collection</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}