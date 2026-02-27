import Image from "next/image";
import type { PerfumeProduct } from "../../types/product";
import { ButtonLink } from "../ui/Button";

interface FeaturedProductCardProps {
  product: PerfumeProduct;
}

export function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  const detailHref = `/products/${product.id}`;

  return (
    <article className="mv-featured-product-card">
      <div className="mv-featured-product-media">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="mv-featured-product-image"
          sizes="(min-width: 1024px) 540px, 100vw"
          unoptimized
        />
      </div>

      <div className="mv-featured-product-content">
        <div className="mv-featured-product-kicker">
          Maison Velours • {product.category}
        </div>
        <h2 className="mv-featured-product-name">{product.name}</h2>
        <p className="mv-featured-product-description">
          {product.fullDescription}
        </p>

        <div className="mv-featured-product-notes">
          <div>
            <div className="mv-featured-product-notes-label">Top</div>
            <div className="mv-featured-product-notes-values">
              {product.topNotes.join(", ")}
            </div>
          </div>
          <div>
            <div className="mv-featured-product-notes-label">Heart</div>
            <div className="mv-featured-product-notes-values">
              {product.heartNotes.join(", ")}
            </div>
          </div>
          <div>
            <div className="mv-featured-product-notes-label">Base</div>
            <div className="mv-featured-product-notes-values">
              {product.baseNotes.join(", ")}
            </div>
          </div>
        </div>

        <div className="mv-featured-product-footer">
          <div className="mv-featured-product-price">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}{" "}
            · {product.size}
          </div>
          <div className="mv-featured-product-meta">
            <span>{product.longevity}</span>
            <span>•</span>
            <span>{product.occasion.join(" / ")}</span>
          </div>
          <ButtonLink href={detailHref}>View details</ButtonLink>
        </div>
      </div>
    </article>
  );
}
