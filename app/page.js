"use client";
import Slideshow from "@/src/components/SlideShow";
import Products from "@/src/components/Products";
import Brands from "@/src/components/Brands";
import Urun from "@/src/components/Urun";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  const controlsBrands = useAnimation();
  const controlsProducts = useAnimation();

  // Set up intersection observers
  const [refBrands, inViewBrands] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Adjust this threshold as needed
  });

  const [refProducts, inViewProducts] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Define animations
  const animationVariants = {
    hidden: { x: -200 }, // Start position (off-screen to the left)
    visible: { x: 0 }, // End position (default position)
  };

  // Animate when in view
  if (inViewBrands) {
    controlsBrands.start("visible");
  }
  if (inViewProducts) {
    controlsProducts.start("visible");
  }

  // console.log(`current route: ${router.pathname}`);
  return (
    <main>
      <Slideshow />
      {/* Animate Brands component */}

      <Products />

      <motion.div
        ref={refBrands}
        initial="hidden"
        animate={controlsBrands}
        variants={animationVariants}
      >
        <Brands />
      </motion.div>

      {/* Animate Products component */}
    </main>
  );
}
