import hero from "@/assets/andy-li-CpsTAUPoScw-unsplash.jpg";
import hero3 from "@/assets/rosebox-BFdSCxmqvYc-unsplash.jpg";

import { Button } from "@/components/atoms";

export function Hero() {
  return (
    <section className="flex flex-col items-center h-[90vh] w-full gap-6 px-8">
      <div className="flex w-full justify-center items-center py-8">
        <div className="w-full lg:w-[80%] flex flex-col items-center gap-4">
          <div className=" flex gap-3 items-center justify-center rounded-full p-2 border-1 border-primary">
            <div className="bg-secondary px-4 py-1 rounded-full text-xs">
              New
            </div>
            <p className="text-xs">
              All-in-one Platform for everything logistics
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground">
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
      <div className="w-full lg:w-[80%] h-full flex items-end justify-center gap-4 mb-4">
        <div className="relative h-full w-full md:w-[80%] rounded-xl flex items-end">
          <div className="absolute h-full w-full">
            <img
              src={hero3}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-linear-to-t from-primary to-secondary absolute inset-0 opacity-90 rounded-xl bg-blend-multiply"></div>
          <div className="px-2 py-4 md:p-4 z-10">
            <p className="text-sm text-primary-foreground">
              Premium Service for Wide Range of Logistics Needs
            </p>
          </div>
        </div>
        <div className="h-[70%] w-[60%] rounded-xl bg-secondary hidden md:flex"></div>
        <div className="h-[50%] w-full rounded-xl">
          <img
            src={hero}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="h-[70%] w-[60%] rounded-xl bg-secondary hidden md:flex"></div>
        <div className="relative h-full w-full md:w-[80%] rounded-xl flex items-end">
          <div className="absolute h-full w-full">
            <img
              src={hero}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-linear-to-t from-primary to-secondary absolute inset-0 opacity-90 rounded-xl bg-blend-multiply"></div>
          <div className="px-2 py-4 md:p-4 z-10">
            <p className="text-sm text-primary-foreground">
              Revolutionalizing Logistics One Customer at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
