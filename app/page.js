import Hero from "./components/hero/Hero";
import ProfileCards from "./components/cards/ProfileCards";
import Kolgai from "./components/about/Kolgai";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Kolgai/>
      <ProfileCards/>
      </div>
  );
}
