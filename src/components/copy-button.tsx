"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface CopyButtonProps {
  value?: string;
  watchElement?: boolean;
}

export function CopyButton({ value, watchElement = false }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [textToCopy, setTextToCopy] = useState(value);

  useEffect(() => {
    if (watchElement && buttonRef.current) {
      // Prende il testo dal elemento precedente !!RICORDA CHE DEVE ESSERE SOTTO IL TESTO DA COPIARE!!
      const sibling = buttonRef.current.previousElementSibling;
      if (sibling) {
        setTextToCopy(sibling.textContent || "");
      }
    }
  }, [watchElement]);

  const copy = async () => {
    try {
      if (!textToCopy) return;
      
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback per browser che non supportano clipboard (0ios)
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Fallback: Impossibile copiare il testo", err);
        }
        textArea.remove();
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Errore durante la copia", error);
    }
  };

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      className="h-6 w-6"
      onClick={copy}
    >
      {isCopied ? (
        <Check className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  );
}
