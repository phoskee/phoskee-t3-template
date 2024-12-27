'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast as sonnerToast } from "sonner";

import {
  AlertCircle,
  Bell,
  Check,
  Info,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ComponentsTab() {
  return (
    <div className="flex flex-col gap-6">
      {/* Forms Section */}
      <Card>
        <CardHeader>
          <CardTitle>Form Components</CardTitle>
          <CardDescription>Esempi di componenti per form</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="email@esempio.com" type="email" />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Abilita notifiche</Label>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => sonnerToast.success("Form inviato!")}>
              Salva
            </Button>
            <Button
              variant="outline"
              onClick={() => sonnerToast.info("Operazione annullata!")}
            >
              Annulla
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alerts Section */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Components</CardTitle>
          <CardDescription>Vari tipi di alert e notifiche</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Alert informativo per messaggi generici
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Errore</AlertTitle>
            <AlertDescription>
              Alert per errori e warning importanti
            </AlertDescription>
          </Alert>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => {
                sonnerToast.success("Operazione completata!", {
                  description: "Esempio di toast di successo",
                  icon: <Check className="h-4 w-4" />,
                });
              }}
            >
              Sonner Success
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                sonnerToast("Nuova notifica!", {
                  description: "Hai un nuovo messaggio",
                  icon: <Bell className="h-4 w-4" />,
                });
              }}
            >
              Sonner Info
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                sonnerToast.error("Errore!", {
                  description: "C'è stato un errore",
                  icon: <AlertCircle className="h-4 w-4" />,
                });
              }}
            >
              Sonner Error
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                sonnerToast.warning("Attenzione!", {
                  description: "C'è stato un errore",
                  icon: <AlertCircle className="h-4 w-4" />,
                });
              }}
            >
              Sonner Warning
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Nuova notifica!",
                  description: "Hai un nuovo messaggio",
                });
              }}
            >
              Toast
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* States Section */}
      <Card>
        <CardHeader>
          <CardTitle>Stati e Badge</CardTitle>
          <CardDescription>Componenti per mostrare stati</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-green-500/10 text-green-500"
                >
                  Online
                </Badge>
                <span className="text-sm">Sistema attivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-yellow-500/10 text-yellow-500"
                >
                  In Progress
                </Badge>
                <span className="text-sm">Elaborazione in corso</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-red-500/10 text-red-500">
                  Error
                </Badge>
                <span className="text-sm">Errore di sistema</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}