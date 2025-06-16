import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { headerLinks } from "@/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-light text-white px-4 bg-brand">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-no-bg-positivo.png"
              alt="Anatomic Logo"
              width={180}
              height={180}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-6">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            size="sm"
            className="hidden sm:flex items-center gap-2 hover:bg-green-500 transition-colors bg-green-400"
            asChild
          >
            <Link
              href="https://wa.me/+529635652159"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Contáctanos por WhatsApp
            </Link>
          </Button>
          {/* <Button
            variant="outline"
            size="icon"
            className="md:hidden text-white border-white hover:bg-brand-light bg-brand"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button> */}
        </div>
        {/* {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-brand p-4 z-50">
            <nav>
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white text-lg font-medium hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )} */}
      </div>
    </header>
  );
}
