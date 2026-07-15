import { BackgroundEffects } from "./components/BackgroundEffects";
import { HeroContent } from "./components/HeroContent";
import { HeroImage } from "./components/HeroImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <BackgroundEffects />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-20 lg:px-10">

        <HeroContent />

        <HeroImage />

          </div>
    </section>
  );
}