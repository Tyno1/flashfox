import {
  CallToAction,
  Features,
  Hero,
  Playback,
  Testimonial,
} from "@/components/components/home";
import { Faq } from "@/components/components/home/Faq";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Playback />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  );
}
