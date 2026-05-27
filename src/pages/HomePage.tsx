import { AboutPreview } from "@/components/AboutPreview";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
    </>
  );
}
