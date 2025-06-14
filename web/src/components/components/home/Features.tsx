import {
  Link,
  MoveUpRight,
  RadioTower,
  Ship,
  Truck,
  User,
  Warehouse,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Ship />,
    heading: "Seamless Global Shipping",
    text: "Connecting your business to 200+ countries with optimized routes and expert customs handling.",
  },
  {
    icon: <RadioTower />,
    heading: "Real-Time Cargo Tracking",
    text: "Live shipment monitoring with GPS precision and mobile access anywhere, anytime.",
  },
  {
    icon: <Link />,
    heading: "Customized Supply Chain Solutions",
    text: "Tailored logistics strategies designed to optimize your unique business operations.",
  },
  {
    icon: <Truck />,
    heading: "Sustainable Logistics",
    text: "Eco-friendly shipping options reducing carbon footprint while maintaining operational efficiency.",
  },
  {
    icon: <Warehouse />,
    heading: "Warehouse & Fulfillment Services",
    text: "Strategic storage facilities with rapid order processing and distribution capabilities.",
  },
  {
    icon: <User />,
    heading: "Dedicated Customer Support",
    text: "24/7 expert assistance ensuring smooth logistics operations and rapid problem resolution.",
  },
];

export function Features() {
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
    },
  };
  return (
    <section className="min-h-[92vh] w-full flex flex-col items-center justify-center bg-secondary-foreground px-4 py-10">
      <div className="text-secondary  w-[70%] lg:w-[50%] text-center mb-10">
        <motion.h2
          variants={defaultAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="text-2xl md:text-4xl font-medium mb-2"
        >
          Efficient and Integrated Logistics Services
        </motion.h2>
        <motion.p
          variants={defaultAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="text-xs"
        >
          Simplify logistics with our efficient, quality focused services
        </motion.p>
      </div>
      <motion.div
        variants={defaultAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          staggerChildren: 0.03,
          
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-0 md:px-[5%]"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full h-[170px] lg:h-[200px] bg-primary/20 rounded-lg p-6 flex flex-col justify-between text-sm md:text-medium text-secondary"
          >
            <div className="flex justify-between">
              <div>{feature.icon}</div>
              <div>
                <MoveUpRight />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-1">{feature.heading}</h3>
              <p className="text-sm md:text-medium">{feature.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
