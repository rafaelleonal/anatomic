import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full flex justify-center items-center bg-muted/50"
    >
      <div className="container mx-auto w-full">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Preguntas
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y cómo podemos
            ayudarte.
          </p>
        </div>

        <div className="mx-auto w-full">
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
