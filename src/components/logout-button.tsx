"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export function LogOut(){
    const handleLogout = async () => {
        await authClient.signOut();
    }
    return(
        <Button onClick={handleLogout}>Logout</Button>
    )
}