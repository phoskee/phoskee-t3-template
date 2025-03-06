import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "@/components/logout-button";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
		headers: await headers(),
	});


  if(!session) {
    return(
      <div>
        <h1>Not authenticated</h1>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>

      <h1>Welcome <span className="text-blue-600">{session.user.name}</span> as <span className="text-green-600">{session.user.role}</span></h1>
      <LogOut />
    </div>
  );
}
