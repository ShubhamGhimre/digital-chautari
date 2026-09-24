import { Check as CheckIcon } from "lucide-react";

export function Check({ dark = false, empty = false }: { dark?: boolean; empty?: boolean }) {
  return (
    <span className={`check ${dark ? "check-dark" : ""}`} aria-hidden="true">
      {empty ? null : <CheckIcon className="h-4 w-4" />}
    </span>
  );
}
