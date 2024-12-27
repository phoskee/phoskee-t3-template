"use client";

import { Toaster } from "sonner";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesTabs } from "@/components/sections/features-tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-5xl">
          <FeaturesTabs />
        </section>
      </main>
    </div>
  );
}
