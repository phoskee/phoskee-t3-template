"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "sonner";


export default function Home() {
  return (
    <div className="">

  
        <Link href="/user">
          <Button>User</Button>
        </Link>
    
    </div>
  );
}
