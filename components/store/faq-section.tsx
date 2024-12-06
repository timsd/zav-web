import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection({ items }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
