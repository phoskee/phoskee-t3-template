'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Terminal, Palette, Zap, Box } from "lucide-react";

export function FeaturesTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Tecnologie Incluse
          </CardTitle>
          <CardDescription>
            Stack tecnologico moderno e performante
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Core Stack</h4>
            <ul className="list-disc pl-4 text-sm text-muted-foreground">
              <li>Next.js 13+ con App Router</li>
              <li>TypeScript per type safety</li>
              <li>Tailwind CSS per lo styling</li>
              <li>shadcn/ui per componenti UI</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="h-5 w-5" />
            Componenti Preconfigurati
          </CardTitle>
          <CardDescription>
            Componenti pronti all'uso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button 
              onClick={() => {
                toast.success("Toast di esempio!", {
                  description: "Notifiche eleganti con Sonner",
                });
              }}
            >
              Prova Toast
            </Button>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Include:</p>
              <ul className="list-disc pl-4">
                <li>Sistema di tema chiaro/scuro</li>
                <li>Notifiche con Sonner</li>
                <li>Componenti UI accessibili</li>
                <li>Layout responsive</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}