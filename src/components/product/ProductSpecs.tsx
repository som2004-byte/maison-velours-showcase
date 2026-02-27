import type { PerfumeProduct } from "../../types/product";

interface ProductSpecsProps {
  product: PerfumeProduct;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <section className="mv-product-specs" aria-labelledby="product-specs-heading">
      <h2 id="product-specs-heading" className="sr-only">
        Fragrance details
      </h2>

      <div>
        <div className="mv-product-specs-group-label">Top notes</div>
        <div className="mv-product-specs-group-value">
          {product.topNotes.join(", ")}
        </div>
      </div>

      <div>
        <div className="mv-product-specs-group-label">Heart notes</div>
        <div className="mv-product-specs-group-value">
          {product.heartNotes.join(", ")}
        </div>
      </div>

      <div>
        <div className="mv-product-specs-group-label">Base notes</div>
        <div className="mv-product-specs-group-value">
          {product.baseNotes.join(", ")}
        </div>
      </div>

      <div>
        <div className="mv-product-specs-group-label">Longevity</div>
        <div className="mv-product-specs-group-value">
          {product.longevity}
        </div>
      </div>

      <div>
        <div className="mv-product-specs-group-label">Size</div>
        <div className="mv-product-specs-group-value">
          {product.size}
        </div>
      </div>

      <div>
        <div className="mv-product-specs-group-label">Occasion</div>
        <div className="mv-product-specs-group-value">
          {product.occasion.join(" / ")}
        </div>
      </div>
    </section>
  );
}
