import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mv-footer">
      <Container>
        <div className="mv-footer-inner">
          <div className="mv-footer-brand">Maison Velours</div>
          <p className="mv-footer-tagline">
            A curated collection of silk-soft, luminous perfumes crafted in
            small batches for discerning sensibilities.
          </p>
          <div className="mv-footer-meta">
            © {year} Maison Velours. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
