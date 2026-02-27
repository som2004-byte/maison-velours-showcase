import Link from "next/link";
import { Container } from "../ui/Container";

export function Navbar() {
  return (
    <header className="mv-navbar">
      <Container>
        <nav className="mv-navbar-inner" aria-label="Main navigation">
          <div className="mv-navbar-brand">
            <Link href="/">Maison Velours</Link>
          </div>
          <div className="mv-navbar-nav">
            <Link href="/" className="mv-navbar-link">
              Home
            </Link>
            <Link href="/products" className="mv-navbar-link">
              Products
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
