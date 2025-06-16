import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subBrands } from "@/data";

export default function SubBrands() {
  return (
    <section id="submarcas" className="bg-white flex w-full justify-center">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Especialidades
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestras Submarcas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre las diferentes áreas especializadas de Anatomic, cada una
            diseñada para atender necesidades específicas con la misma calidad y
            profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {subBrands.map((submarca, index) => (
            <Card key={index} className="overflow-hidden">
              <figure className="relative h-60 w-full overflow-hidden">
                <Image
                  src={submarca.image || "/placeholder.svg"}
                  alt={submarca.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 hover:transition-duration-300 hover:transition-ease-in-out px-3"
                />
              </figure>
              <CardHeader>
                <CardTitle className="text-xl text-brand">
                  {submarca.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{submarca.description}</p>
                <br />
                {submarca?.services ? (
                  <ul className="list-disc list-inside">
                    {submarca.services.map((service, index) => (
                      <li className="text-muted-foreground" key={index}>
                        {service}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    Pronto más información...
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="p-0 h-auto text-brand"
                  asChild
                >
                  {submarca.isReady && (
                    <Link href="#" className="flex items-center gap-1">
                      Saber más <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
