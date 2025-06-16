import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainBanner() {
  return (
    <section className="flex flex-col items-center justify-center h-[70vh] bg-brand w-full px-10 md:px-0">
      <div className="w-full max-w-3xl space-y-4 text-white container">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Bienvenido a{" "}
          <span className="text-white font-bold text-6xl">AN-ATOMIC</span>
        </h1>
        <p className="text-lg text-gray-100 md:text-xl">
          ALWAYS IMPROVING - Descubre una nueva forma de cuidar tu salud y
          bienestar con nuestros servicios especializados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-brand hover:bg-gray-200"
            asChild
          >
            <Link href="#contacto">Conoce más</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-brand-light bg-brand-light"
            asChild
          >
            <Link href="#servicios">Nuestros servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
