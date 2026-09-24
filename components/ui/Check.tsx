export function Check({ dark = false, empty = false }: { dark?: boolean; empty?: boolean }) {
  return (
    <span className={`check ${dark ? "check-dark" : ""}`} aria-hidden="true">
      {empty ? "" : "✓"}
    </span>
  );
}
