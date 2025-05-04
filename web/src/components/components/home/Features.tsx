import {
  Link,
  MoveUpRight,
  RadioTower,
  Ship,
  Truck,
  User,
  Warehouse,
} from "lucide-react";

export function Features() {
  const Features = [
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

  return (
    <div className="min-h-[92vh] w-full flex flex-col items-center justify-center bg-secondary-foreground px-4 py-10 gap-10">
      <h2 className="text-secondary text-2xl md:text-4xl font-medium w-[70%] lg:w-[50%] text-center">
        Efficient and Integrated Logistics Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-0 md:px-[5%]">
        {Features.map((feature) => (
          <div className="w-full h-[170px] lg:h-[200px] bg-primary/20 rounded-lg p-6 flex flex-col justify-between text-sm md:text-medium text-secondary">
            <div className="top-section flex justify-between">
              <div>{feature.icon}</div>
              <div>
                <MoveUpRight />
              </div>
            </div>
            <div className="bottom-section">
              <h3 className="font-bold mb-1">{feature.heading}</h3>
              <p className="text-sm md:text-medium">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
