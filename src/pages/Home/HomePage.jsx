import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = ({ darkMode }) => {
  useTitle("Access Latest Computer Science eBooks - CodeBook");
  return (
    <main>
      <Hero darkMode={darkMode} />
      <Testimonials />
      <Faq />
    </main>
  );
};
