import { notFound } from "next/navigation";

// Routes any unknown path to app/[lang]/not-found.tsx so it renders inside the localized layout.
export default function CatchAll() {
  notFound();
}
