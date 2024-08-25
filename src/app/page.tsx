import { FAQ } from "@/components/homePage/faq/FAQ";
import { Hero } from "@/components/homePage/Hero";
import { Informations } from "@/components/homePage/informations/Informations";
import { StartBuilding } from "@/components/homePage/startBuilding/StartBuilding";
import { TryFree } from "@/components/homePage/tryFree/TryFree";

export default function Home() {
  return (
  <>
    <Hero />
    <Informations />
    <StartBuilding />
    <FAQ />
    <TryFree />
  </>
  );
}
