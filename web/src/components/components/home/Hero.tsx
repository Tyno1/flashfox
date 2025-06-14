import hero from "@/assets/andy-li-CpsTAUPoScw-unsplash.jpg";
import hero3 from "@/assets/rosebox-BFdSCxmqvYc-unsplash.jpg";
import { Button } from "@/components/atoms";
import { useNavigate } from "react-router";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type AnimatedTextProps = {
  text: string;
  Wrapper?: React.ElementType;
  className?: string;
};

const AnimatedText = ({
  text,
  Wrapper = "h1",
  className,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useInView(ref, { once: false });
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.03,
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            className={index > 1 && index < 18 && "text-primary"}
            key={index}
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
export function Hero() {
  const navigate = useNavigate();

  const defaultAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      y: 40,
    },
    visible: {
      height: "auto",
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  return (
    <section className="flex flex-col items-center h-[92vh] w-full gap-6 px-8">
      <div className="flex w-full justify-center items-center py-8">
        <div className="w-full lg:w-[80%] flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" flex gap-3 items-center justify-center rounded-full p-2 border-1 border-primary"
          >
            <div className="bg-secondary px-4 py-1 rounded-full text-xs">
              New
            </div>
            <motion.p
              initial={{
                scale: 0,
                opacity: 0,
                width: 0,
                height: 0,
                overflow: "hidden",
              }}
              animate={{ scale: 1, opacity: 1, width: "auto", height: "auto" }}
              transition={{ duration: 0.8, ease: "backOut", delay: 1 }}
              className="text-xs"
            >
              All-in-one Platform for everything logistics
            </motion.p>
          </motion.div>

          <AnimatedText
            text="A Delivery Service Created To Make A Difference"
            className="text-4xl md:text-6xl font-bold text-center text-foreground"
          />

          <motion.p
            variants={defaultAnimation}
            initial="hidden"
            animate="visible"
            className="text-center text-medium w-[80%]"
          >
            Our state-of-the-art tracking keeps you informed at every step,
            while our dedicated team ensures on-time arrivals—even when the
            clock is ticking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex gap-4"
          >
            <Button
              onClick={() => navigate("/services")}
              size="lg"
              variant="default"
              className="rounded-none"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => navigate("/about")}
              size="lg"
              variant="outline"
              className="rounded-none"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        className="w-full lg:w-[80%] h-full flex items-end justify-center gap-4 mb-4"
      >
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
      </motion.div>
    </section>
  );
}
