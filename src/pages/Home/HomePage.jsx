import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = ({ darkMode }) => {
  useTitle("Access Latest Computer Science eBooks - CodeBook");
  return (
    <main>
      <Hero darkMode={darkMode} />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
