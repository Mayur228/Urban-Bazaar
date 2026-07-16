import { motion } from "framer-motion";

export function PromoImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1673757121315-e7f427f1d378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0JTIwd29tZW58ZW58MHx8MHx8fDA%3D"
        alt="Fashion Model"
        className="h-[520px] rounded-[30px] object-cover shadow-2xl"
      />

      <div className="absolute -bottom-5 left-5 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-xl">
        <p className="text-sm text-zinc-300">
          Trusted by
        </p>

        <h3 className="text-2xl font-bold text-white">
          15K+ Customers
        </h3>
      </div>
    </motion.div>
  );
}