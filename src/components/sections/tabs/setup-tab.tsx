"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

import { CheckCircle2, Terminal, Palette, Settings2 } from "lucide-react";
import { Code } from "@/components/ui/code";
import { CopyButton } from "@/components/copy-button";

export function SetupTab() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Guida all'Installazione
          </CardTitle>
          <CardDescription>
            Configura il tuo progetto in pochi passaggi
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Terminal className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">1. Clona il Template</h4>
                <div className="flex items-center justify-between gap-2">
                  {/* Su iPhone 15 non funziona il text-wrap come dovrebbe*/}
                  <Code className="text-wrap">
                    git clone https://github.com/tuouser/phoskee-t3-template.git
                  </Code>
                  <CopyButton watchElement />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Settings2 className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">
                  2. Installa le Dipendenze
                </h4>
                <div className="flex items-center justify-between">
                  <Code>npm install</Code>
                  <CopyButton watchElement />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Palette className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">
                  3. Avvia il Server di Sviluppo
                </h4>
                <div className="flex items-center justify-between">
                  <Code>npm run dev</Code>
                  <CopyButton watchElement />
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Tutto Pronto!</AlertTitle>
            <AlertDescription>
              Il template è configurato con best practices e componenti pronti
              all'uso
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
