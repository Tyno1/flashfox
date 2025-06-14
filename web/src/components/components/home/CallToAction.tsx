import { Button, CustomInput } from "@/components/atoms";

export function CallToAction() {
  return (
    <section className="min-h-[30vh] w-[95%] lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 bg-secondary rounded-lg p-10">
      <h3 className="text-4xl w-full text-center lg:text-left font-medium text-secondary-foreground">
        Swift & Reliable Delivery
        <br className="hidden md:flex" /> To Your Doorstep
      </h3>
      <div className="w-full flex flex-col gap-2">
        <p className="text-center lg:text-left text-secondary-foreground">
          Join thousands of businesses making smarter shipping decisions
        </p>
        <CustomInput
        className="placeholder:text-primary-foreground text-primary-foreground"
          placeholder="Enter Your Email"
          wrapperClassName="p-2 border-secondary-foreground"
          trailingElement={<Button>Get Started</Button>}
        />
      </div>
    </section>
  );
}
