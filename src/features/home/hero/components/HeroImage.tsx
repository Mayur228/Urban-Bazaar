import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { HeroBadge } from "./HeroBadge";

export function HeroImage() {
  return (
    <div className="relative hidden flex-1 justify-end lg:flex">

      {/* Blue Glow */}

      <div className="absolute top-10 right-16 h-[500px] w-[500px] rounded-full bg-sky-300/30 blur-[120px]" />

      {/* Image */}

      <motion.img
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        src="https://plus.unsplash.com/premium_photo-1673757121315-e7f427f1d378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0JTIwd29tZW58ZW58MHx8MHx8fDA%3D"
        className="relative z-10 h-[700px] w-[500px] rounded-[40px] object-cover shadow-2xl"
      />

      {/* Floating Card */}

      <div className="absolute left-0 top-28 z-20">

        <FloatingCard
          title="Premium Jacket"
          price="$149"
        />

      </div>

      {/* Badge */}

      <div className="absolute bottom-24 right-0 z-20">

        <HeroBadge />

      </div>

    </div>
  );
}