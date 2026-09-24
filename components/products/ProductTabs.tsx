"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";
import { ProductMock } from "@/components/products/ProductMocks";
import { buttonClass } from "@/components/ui/Button";
import { chipColor } from "@/lib/constants";
import { PRODUCTS } from "@/lib/data/products";
import type { ProductSlug } from "@/lib/types";

const STAT_COLS: Record<number, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" };

export function ProductTabs({ initialTab }: { initialTab: ProductSlug }) {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<ProductSlug>(initialTab);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const select = (slug: ProductSlug, focus = false) => {
    setActive(slug);
    router.replace(`${pathname}?tab=${slug}`, { scroll: false });
    if (focus) tabRefs.current[slug]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % PRODUCTS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + PRODUCTS.length) % PRODUCTS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = PRODUCTS.length - 1;
    if (next >= 0) {
      e.preventDefault();
      select(PRODUCTS[next].slug, true);
    }
  };

  const product = PRODUCTS.find((p) => p.slug === active) ?? PRODUCTS[0];

  return (
    <div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Products">
        {PRODUCTS.map((p, i) => (
          <button
            key={p.slug}
            ref={(el) => {
              tabRefs.current[p.slug] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${p.slug}`}
            aria-selected={p.slug === active}
            aria-controls={`panel-${p.slug}`}
            tabIndex={p.slug === active ? 0 : -1}
            className="tab"
            onClick={() => select(p.slug)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div
        key={product.slug}
        id={`panel-${product.slug}`}
        role="tabpanel"
        aria-labelledby={`tab-${product.slug}`}
        className="fade-swap grid items-center gap-8 rounded-xl border border-line bg-white p-6 md:p-10 lg:grid-cols-2"
      >
        <div>
          <span className="text-[13px] font-semibold text-teal-dark">{product.category}</span>
          <h2 className="mt-1 font-display text-[26px] font-bold leading-[1.15] md:text-[32px]">{product.title}</h2>
          <p className="mt-3 text-muted">{product.description}</p>

          {product.stats && (
            <div className={`mt-6 grid gap-4 ${STAT_COLS[Math.min(product.stats.length, 3)]}`}>
              {product.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[24px] font-bold leading-none text-teal-dark">{s.value}</div>
                  <div className="mt-1.5 text-[13px] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {product.tags && (
            <div className="mt-5 flex flex-wrap gap-2">
              {product.tags.map((t, i) => (
                <span key={t} className="rounded-2xl px-3.5 py-1.5 text-[13px] font-medium" style={{ background: chipColor(i) }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7">
            <Link href="/contact" className={buttonClass("primary")}>
              {product.cta} →
            </Link>
          </div>
        </div>

        <div className="rounded-xl p-5 md:p-7" style={{ background: "linear-gradient(135deg,#E7F5EA,#E7F2F4)" }}>
          <ProductMock slug={product.slug} />
        </div>
      </div>
    </div>
  );
}
