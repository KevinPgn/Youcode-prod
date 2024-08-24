import { FAQ } from "@/components/faq/FAQ";
import { Hero } from "@/components/homePage/Hero";
import { Informations } from "@/components/informations/Informations";
import { StartBuilding } from "@/components/startBuilding/StartBuilding";

export default function Home() {
  return (
  <>
    <Hero />
    <Informations />
    <StartBuilding />
    <FAQ />
  </>
  );
}
