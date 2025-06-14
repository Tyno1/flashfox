import {
  CallToAction,
  Features,
  Hero,
  Playback,
  Testimonial,
} from "@/components/components/home";
import { Faq } from "@/components/components/home/Faq";
import { useEffect, useRef, useState } from "react";

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLVideoElement>(null);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <>
      <Hero />
      <Features />
      <Playback containerRef={containerRef} isVisible={isVisible} />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  );
}
