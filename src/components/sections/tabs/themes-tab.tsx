"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ModeToggle } from "@/components/mode-toggle";
import { CheckCircle2, Palette, Moon, Sun, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemesTab() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Sistema dei Temi
          </CardTitle>
          <CardDescription>
            Gestione avanzata dei temi con next-themes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Tema Automatico</AlertTitle>
            <AlertDescription>
              Il tema si adatta automaticamente alle preferenze del sistema
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card 
              className="cursor-pointer transition-colors hover:bg-accent"
              onClick={() => setTheme("light")}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  Tema Chiaro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ottimizzato per l'uso diurno con colori luminosi e contrasto
                  elevato
                </p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer transition-colors hover:bg-accent"
              onClick={() => setTheme("dark")}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Tema Scuro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Perfetto per l'uso notturno con ridotta affaticamento degli
                  occhi
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              Prova a cambiare il tema usando questo pulsante
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
