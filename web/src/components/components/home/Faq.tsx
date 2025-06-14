import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I track the status of my shipment?",
    answer:
      "Tracking your shipment is easy with our real-time tracking system. Simply enter your tracking number on our homepage or use our mobile app to receive instant updates on your shipment's location and estimated delivery time.",
  },
  {
    question: "What international destinations do you service?",
    answer:
      "We provide logistics solutions to over 200 countries worldwide. Our extensive global network ensures reliable shipping to all major international markets with specialized expertise in Europe, Asia, and the Americas.",
  },
  {
    question:
      "How do you handle customs clearance for international shipments?",
    answer:
      "Our dedicated customs team manages all documentation and compliance requirements for international shipments. We provide pre-clearance services, duty calculation, and complete paperwork handling to ensure smooth border crossings with minimal delays.",
  },
  {
    question: "What shipping options do you offer for urgent deliveries?",
    answer:
      "For urgent deliveries, we offer express shipping services including same-day delivery, next-day air, and 2-day expedited options. Our priority handling ensures your time-sensitive shipments reach their destination within the guaranteed timeframe.",
  },
  {
    question: "How do you ensure the safety of fragile or valuable items?",
    answer:
      "We employ specialized packaging techniques and materials designed for fragile and high-value items. Additionally, we offer insurance coverage options, secure handling protocols, and climate-controlled transportation for sensitive goods requiring extra protection.",
  },
];
export function Faq() {
  return (
    <section className="min-h-[70vh] w-full md:w-[70%] flex flex-col items-center justify-center mx-auto px-4 md:px-4 py-10">
      <div className="text-foreground w-[70%] text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xs">Answers to Questions asked by most Customers</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item ${index}`}>
            <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-xs md:text-sm leading-loose">{faq.answer} </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
