import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribirnos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wine text-tone-50 shadow-lg shadow-wine/30 transition-all duration-300 hover:bg-wine-deep hover:shadow-xl"
    >
      <MessageCircle size={24} strokeWidth={1.7} />
    </a>
  );
}
