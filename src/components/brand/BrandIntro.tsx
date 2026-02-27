import { Section } from "../ui/Section";
import { Container } from "../ui/Container";

export function BrandIntro() {
  return (
    <Section className="mv-brand-intro">
      <Container>
        <div className="mv-brand-intro-inner">
          <h2 className="mv-section-heading">The Maison</h2>
          <div className="mv-brand-intro-lines">
            <p>
              Maison Velours composes fragrances the way a couturier cuts cloth:
              with restraint, impeccable lines, and an obsession with how it
              moves on the body.
            </p>
            <p>
              Each perfume is built on a silk-soft structure of fine naturals
              and rare molecules, designed to sit close to the skin yet leave a
              lingering impression in the air.
            </p>
            <p>
              Our collections are released in small numbered batches, favouring
              thoughtful refinement over volume, for those who collect moments
              rather than bottles.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
