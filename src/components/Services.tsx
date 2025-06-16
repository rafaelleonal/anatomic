"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { services } from "@/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };

  const serviceCategories = [
    {
      id: "orthopedics",
      title: "Ortopedia y terapia física",
      icon: "🦴",
    },
    {
      id: "surgical-programming",
      title: "Programación quirúrgica",
      icon: "🔬",
    },
    {
      id: "training-evaluation",
      title: "Entrenamiento y evaluación",
      icon: "💪",
    },
    {
      id: "nutritional-advisory",
      title: "Nutrición y suplementos deportivos",
      icon: "🥗",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-muted/50 flex justify-center w-full py-16"
    >
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Soluciones
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para mejorar tu
            bienestar y calidad de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
            <Card
              key={category.id}
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-lg",
                expandedService === category.id ? "ring-2 ring-brand" : ""
              )}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleService(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  {expandedService === category.id ? (
                    <ChevronUp className="h-5 w-5 text-brand" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand" />
                  )}
                </div>
              </div>

              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  expandedService === category.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <CardContent className="pt-0 pb-6">
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {services
                      .filter((service) => service.id === category.id)
                      .map((service, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                        >
                          <h3 className="font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {service.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
