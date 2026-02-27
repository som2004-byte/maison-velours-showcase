import { Section } from "../../components/ui/Section";
import { Container } from "../../components/ui/Container";
import { ProductCard } from "../../components/product/ProductCard";
import { ButtonLink } from "../../components/ui/Button";
import { products } from "../../data/products";

export default function ProductsPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="mv-collection-header">
            <h1 className="mv-section-heading">The collection</h1>
            <ButtonLink href="/" variant="secondary">
              Back to landing
            </ButtonLink>
          </div>
          <div className="mv-product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
