"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentsTab } from "./tabs/components-tab";

import { FeaturesTab } from "./tabs/features-tab";
import { ThemesTab } from "./tabs/themes-tab";
import { SetupTab } from "./tabs/setup-tab";

export function FeaturesTabs() {
  return (
    <Tabs defaultValue="features" className="w-full">
      <TabsList className="flex">
        <TabsTrigger value="features" className="w-full">Caratteristiche</TabsTrigger>
        <TabsTrigger value="componenti" className="w-full">Componenti</TabsTrigger>
        <TabsTrigger value="temi" className="w-full">Temi</TabsTrigger>
        <TabsTrigger value="setup" className="w-full">Setup</TabsTrigger>
      </TabsList>

      <TabsContent value="features">
        <FeaturesTab />
      </TabsContent>

      <TabsContent value="componenti">
        <ComponentsTab />
      </TabsContent>

      <TabsContent value="temi">
        <ThemesTab />
      </TabsContent>

      <TabsContent value="setup">
        <SetupTab />
      </TabsContent>
    </Tabs>
  );
}
