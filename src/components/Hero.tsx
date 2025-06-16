import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VideoCarouselItem } from "./ui/video-carousel-item";

export default function Hero() {
  return (
    <section
      id="presentacion"
      className="w-full bg-muted/50 flex justify-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="w-full flex justify-center items-center">
            <CardHeader className="flex flex-col items-center w-full">
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
                AN-ATOMIC T-SHOULD
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-center px-10">
              Playera Rehabilitación de Hombro Sin Mangas T Should
            </CardDescription>
            <CardContent className="flex flex-col items-center gap-4 w-full">
              <Carousel className="w-full">
                <CarouselContent className="w-full h-full">
                  <CarouselItem className="w-full flex justify-center items-center">
                    <Image
                      src="/images/anatomic-playera.webp"
                      alt="Playera Rehabilitación de Hombro Sin Mangas T Should"
                      width={500}
                      height={500}
                    />
                  </CarouselItem>
                  <VideoCarouselItem
                    videoId="tfgw-Z0M0rQ"
                    title="Demostración de la Playera AN-ATOMIC T-SHOULD"
                    autoplay={false}
                    controls={true}
                  />
                  <CarouselItem className="w-full flex justify-center items-center">
                    <Image
                      src="/images/anatomic-playera-2.webp"
                      alt="Playera Rehabilitación de Hombro Sin Mangas T Should"
                      width={500}
                      height={500}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
              </Carousel>
              <Button size="lg" asChild className="mx-auto">
                <Link
                  href="https://articulo.mercadolibre.com.mx/MLM-3673833750-playera-rehabilitacion-de-hombro-sin-mangas-t-should-_JM?searchVariation=187810549453#polycard_client=search-nordic&searchVariation=187810549453&position=4&search_layout=grid&type=item&tracking_id=2a4b68ff-6e6e-4e4b-bc56-e284e7ffa61f"
                  target="_blank"
                >
                  Comprar ahora
                </Link>
              </Button>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <p className="text-center px-5 text-medium text-gray-900 md:text-xl">
              La AN-ATOMIC T-Should es una prenda ortopédica diseñada
              específicamente para el postoperatorio de hombro, lesiones del
              manguito rotador o fracturas del brazo. Su diseño sin mangas
              permite vestirla fácilmente sin necesidad de mover el brazo
              afectado, reduciendo el dolor y el riesgo de movimientos
              indebidos.
            </p>
            <p className="text-center px-5 text-medium text-gray-900 md:text-xl">
              Fabricada en algodón suave y transpirable, brinda confort
              prolongado incluso durante el uso diario en casa, hospital o
              terapia física. Su corte lateral con apertura funcional facilita
              el acceso médico o el uso sobre férulas, cabestrillos o yeso.
            </p>
            <p className="text-center px-5 text-medium text-gray-900 md:text-xl">
              Más que una prenda, es una herramienta útil para el proceso de
              rehabilitación. Funcional, discreta y cómoda. Rehabilita con
              inteligencia. Viste AN-ATOMIC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
