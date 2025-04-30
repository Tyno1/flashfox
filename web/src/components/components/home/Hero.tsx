import hero from "@/assets/van-asten-maarten-ytmBrESO5wM-unsplash.jpg";
import { Button } from "@/components/atoms";
import { useTheme } from "@/providers/ThemeProvider";

export function Hero() {
  const { theme } = useTheme();
  return (
    <section className="relative h-[90vh] w-full">
      {theme === "dark" && (
        <img
          src={hero}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Overlay */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-background/70" />
      )}

      <div className="relative z-10 flex h-full w-full justify-center top-50">
        <div className="w-[90%] md:w-[70%] flex flex-col items-center gap-4">
          <div className="w-full flex gap-3 items-center justify-center">
            <span className="bg-secondary px-4 py-1 rounded-xl">New</span> <p>All-in-one Platform for everything logistics</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            A <span className="text-primary leading">Delivery Service </span>
            Created To Make A Difference
          </h1>
          <p className="text-center text-medium w-[80%]">
            Our state-of-the-art tracking keeps you informed at every step,
            while our dedicated team ensures on-time arrivals—even when the
            clock is ticking.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="rounded-none">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-none">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
