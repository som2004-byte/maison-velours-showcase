import Image from "next/image";
import Link from "next/link";
import { Section } from "../../../components/ui/Section";
import { Container } from "../../../components/ui/Container";
import { ButtonLink } from "../../../components/ui/Button";
import { ProductSpecs } from "../../../components/product/ProductSpecs";
import { getProductById } from "../../../lib/getProductById";

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <main>
        <Section>
          <Container>
            <div className="mv-product-empty">
              <div className="mv-product-empty-inner">
                <h1 className="mv-product-empty-title">
                  Fragrance not found
                </h1>
                <p className="mv-product-empty-text">
                  The perfume you were looking for is no longer in our current
                  collection. Explore the full range to discover a new ritual.
                </p>
                <ButtonLink href="/products">Back to collection</ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section>
        <Container>
          <div className="mv-product-detail">
            <div className="mv-product-detail-inner">
              <div className="mv-product-detail-media">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="mv-product-detail-image"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority
                  unoptimized
                />
              </div>

              <div className="mv-product-detail-content">
                <div className="mv-product-detail-category">
                  Maison Velours • {product.category}
                </div>
                <h1 className="mv-product-detail-title">{product.name}</h1>
                <p className="mv-product-detail-description">
                  {product.fullDescription}
                </p>
                <div className="mv-product-detail-price">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}{" "}
                  · {product.size}
                </div>

                <ProductSpecs product={product} />
              </div>
            </div>
            <div className="mv-product-detail-footer">
              <ButtonLink href="/products" variant="secondary">
                Back to collection
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
