import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand text-white p-8 w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <figure className="flex items-center gap-2">
              <Image
                src="/images/logo-no-bg-positivo.png"
                alt="Anatomic Logo"
                width={180}
                height={180}
              />
            </figure>
            <p className="text-sm text-gray-300">
              Transformando vidas a través del bienestar integral y la salud
              personalizada.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#submarcas"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Submarcas
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Misión</h3>
            <p className="text-sm text-gray-300">
              Despertar en cada persona el fuego de su mejor versión. A través
              de innovación auténtica y soluciones que transforman cuerpo, mente
              y vida, AN–ATOMIC impulsa un cambio real, duradero y con
              propósito. Servimos desde el ejemplo, y construimos una comunidad
              donde con cada mejora generamos un impacto positivo no solo en
              nuestros usuarios, sino en quienes los rodean. Creamos impulso.
              Creamos cambio. Creamos grandeza.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Visión</h3>
            <p className="text-sm text-gray-300">
              Ser la primera marca global en encender un movimiento imparable de
              superación, innovación y disciplina real. Demostrarle al mundo que
              el cambio verdadero sí es posible cuando se vive con propósito, se
              actúa con valores y se trabaja con constancia. AN–ATOMIC será el
              símbolo internacional de transformación personal. Inspirará a
              millones a despertar su potencial, dejar huella y crear una vida
              que valga la pena vivirse, una que también impacte a los demás. No
              es solo crecimiento. Es evolución. Es legado.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-brand-light" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Anatomic. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-brand-light"
              asChild
            >
              <Link href="#" aria-label="Facebook" target="_blank">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-brand-light"
              asChild
            >
              <Link href="#" aria-label="Instagram" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-brand-light"
              asChild
            >
              <Link
                href="https://www.youtube.com/@AN-ATOMIC-77"
                aria-label="Youtube"
                target="_blank"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
