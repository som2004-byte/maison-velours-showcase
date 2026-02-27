import Image from "next/image";
import Link from "next/link";
import type { PerfumeProduct } from "../../types/product";
import { ButtonLink } from "../ui/Button";

interface ProductCardProps {
  product: PerfumeProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const detailHref = `/products/${product.id}`;

  return (
    <article className="mv-product-card">
      <Link href={detailHref} aria-label={product.name}>
        <div className="mv-product-card-image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="mv-product-card-image"
            sizes="(min-width: 1024px) 320px, 50vw"
            unoptimized
          />
        </div>
      </Link>

      <div className="mv-product-card-body">
        <h3 className="mv-product-card-name">{product.name}</h3>
        <p className="mv-product-card-description">
          {product.shortDescription}
        </p>
        <div className="mv-product-card-meta">
          <span className="mv-product-card-price">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </span>
          <ButtonLink href={detailHref} variant="secondary">
            View details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
