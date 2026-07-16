import { FooterBottom } from "./components/FooterBottom";
import { FooterBrand } from "./components/FooterBrand";
import { FooterLinks } from "./components/FooterLinks";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <FooterBrand />

        <FooterLinks />

      </div>

      <FooterBottom />

    </footer>
  );
}