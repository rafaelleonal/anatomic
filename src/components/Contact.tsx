"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });

      toast("Mensaje enviado", {
        description: "¡Gracias por contactarnos! Te responderemos pronto.",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
      toast("Error al enviar", {
        description:
          "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="w-full bg-muted/50 flex justify-center items-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="mb-2">
              Contacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contáctanos
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos aquí para responder tus preguntas y ayudarte a comenzar tu
              viaje hacia una mejor salud y bienestar.
            </p>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand" />
                  <span>+ 52 963 56 52 159</span>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand" />
                  <span>an7atomic71@gmail.com</span>
                </div>
              </CardContent>
            </Card>
            <div className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y te contactaremos a la brevedad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <textarea
                        id="mensaje"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <figure className="relative hidden md:flex h-[600px] w-full rounded-lg overflow-hidden justify-center items-center self-center-safe">
            <Image
              src="/images/doctor-image.jpg"
              alt="Contacto Anatomic"
              fill
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
