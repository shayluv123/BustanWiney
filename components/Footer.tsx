import type { Dictionary } from "@/content";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-wine-900 px-4 py-6 text-center text-sm text-wine-100">
      © {new Date().getFullYear()} {dict.meta.title}. {dict.footer.rights}.
    </footer>
  );
}
