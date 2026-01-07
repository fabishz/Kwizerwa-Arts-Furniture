import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "250788379144";
  const message = "Hello Kwizerwa Arts, I'm interested in your furniture";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline font-medium pr-1">Chat with us</span>
        </div>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden">
        <div className="bg-foreground text-background text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
    </a>
  );
};
