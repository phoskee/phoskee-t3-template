import { authClient } from "@/lib/auth-client";

export default async function Admin() {
    const users = await authClient.admin.listUsers({
        query: {
          limit: 10,
        },
      });
    return (
        <div>
            <h1>Admin</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}
