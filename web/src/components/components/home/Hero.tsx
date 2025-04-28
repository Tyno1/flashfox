import hero from "@/assets/george-dagerotip-zVotglEUg5Y-unsplash.jpg";
import { Button } from "@/components/atoms";

export function Hero() {
  return (
    <section className="sticky top-0 h-[90vh] w-full">
      {/* Background image */}
      <img
        src={hero}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Centered content placeholder (optional) */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="w-[70%] flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold text-center">
            A <span className="text-primary leading">Delivery Service </span>
            Created To Make A Difference
          </h1>
          <p className="text-center text-medium w-[80%]">
            Whether you’re sending an important document, a special gift, or
            inventory to your customers, FlashFox handles every shipment with
            precision and care. Our state-of-the-art tracking keeps you informed
            at every step, while our dedicated team ensures on-time
            arrivals—even when the clock is ticking.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default">Book A Delivery</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
