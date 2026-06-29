import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import WeddingDetails from "./components/WeddingDetails";
import RSVP from "./components/RSVP";
import ThankYou from "./components/ThankYou";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <Story />
      <WeddingDetails />
      <RSVP />
      <ThankYou />
    </>
  );
}