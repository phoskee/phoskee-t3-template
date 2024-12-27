'use client';

import { Code2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function HeroSection() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <Code2 className="h-6 w-6" />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Phoskee T3 Template
        </h1>
        <p className="text-xl text-muted-foreground">
          Template moderno con T3 Stack, shadcn/ui e next-themes per applicazioni web
        </p>
      </section>
    </>
  );
}