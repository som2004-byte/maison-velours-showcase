import { Hero } from "../components/brand/Hero";
import { BrandIntro } from "../components/brand/BrandIntro";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { FeaturedProductCard } from "../components/product/FeaturedProductCard";
import { products } from "../data/products";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <main>
      <Hero />
      <BrandIntro />

      <Section>
        <Container>
          <h2 className="mv-section-heading">Featured compositions</h2>
          <div className="mv-featured-grid">
            {featured.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
