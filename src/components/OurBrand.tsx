import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function OurBrand() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-10 container space-y-6">
      <Badge variant="outline" className="border-brand text-brand">
        Nuestra Marca
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        AN–ATOMIC no es para todos. Es para los que eligen mejorar… siempre.
      </h2>
      <p className="text-medium text-gray-900 md:text-xl">
        Más que una marca, AN–ATOMIC es un estilo de vida. Un sistema diseñado
        para alinear mente, cuerpo y propósito en la búsqueda constante de
        superación personal. Representa el compromiso de quienes no se
        conforman, de aquellos que deciden transformarse desde dentro para dejar
        una huella positiva en el mundo.
      </p>
      <p className="text-medium text-gray-900 md:text-xl">
        Es una organización en evolución constante, creada para servir, inspirar
        y empoderar a las personas en cada etapa de su desarrollo. Cada división
        de AN–ATOMIC responde a una necesidad real, ofreciendo soluciones
        innovadoras que impulsan el crecimiento físico, mental, emocional,
        artístico y profesional de sus usuarios.
      </p>
      <p className="text-medium text-gray-900 md:text-xl">
        Solo quienes están dispuestos a asumir el reto de ser su mejor versión,
        a través del esfuerzo, la honestidad y el trabajo duro, son parte de
        esta comunidad.
      </p>
      <Button size="lg" className="mt-4" asChild>
        <Link
          href="https://wa.me/+529635652159"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          Contáctanos ahora
        </Link>
      </Button>
    </section>
  );
}
