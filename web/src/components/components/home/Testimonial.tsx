import { Button } from "@/components/atoms";

const testimonials = [
  {
    name: "Adrian Holt",
    location: "Cardiff, United Kingdom",
    message:
      "Outstanding logistics service! Our shipments arrive faster and smoother than ever before. The real-time tracking gives us full confidence in every delivery.",
  },
  {
    name: "Sophie Turner",
    location: "Bristol, United Kingdom",
    message:
      "The team has been incredibly supportive and responsive. Their tailored supply chain solutions streamlined our operations and saved us significant costs.",
  },
  {
    name: "Daniel O’Connor",
    location: "Dublin, Ireland",
    message:
      "We expanded globally with ease thanks to their seamless international shipping. Customs clearance is handled expertly, removing all the usual headaches.",
  },
  {
    name: "Emily Chen",
    location: "London, United Kingdom",
    message:
      "Their warehousing and fulfillment services have transformed our e-commerce operations. Orders are processed quickly and accurately every time.",
  },
  {
    name: "Markus Schneider",
    location: "Berlin, Germany",
    message:
      "I appreciate their commitment to sustainability. Our company values eco-friendly shipping, and they provided excellent options without compromising efficiency.",
  },
  {
    name: "Isabella Rossi",
    location: "Milan, Italy",
    message:
      "Fantastic customer support — available whenever we needed assistance. They’ve made logistics stress-free for our growing business.",
  },
];

export function Testimonial() {
  return (
    <section className="min-h-[92vh] w-full lg:w-[80%] mx-auto flex flex-col items-center justify-center bg-background md:px-4 py-10">
      <div className="text-foreground  w-[70%] text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-2">
          Customer Testimonials
        </h2>
        <p className="text-xs">Customer Experiences that Inspire trust </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full h-full px-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[230px] min-h-[300px] lg:h-[200px] border-1 border-primary p-4 flex flex-col text-sm md:text-medium text-secondary-foreground gap-10"
          >
            <div className="flex gap-2">
              <div className="w-[40px] h-[40px] bg-primary rounded-full">
                <img src="" alt="" />
              </div>
              <div>
                <p className="font-bold mb-1">{testimonial.name}</p>
                <p className="text-xs">{testimonial.location}</p>
              </div>
            </div>
            <p className="text-sm line-clamp-8">{testimonial.message}</p>
          </div>
        ))}
      </div>
      <Button variant="outline" className="my-auto rounded-none mt-4">View More</Button>

    </section>
  );
}
