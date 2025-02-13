import { authClient } from "@/lib/auth-client";
async function main() {
  const data = await authClient.signUp.email({
    email: "test@test.com",
    name: "Test",
    surname: "Test",
    password: "test",
    username: "test",
    role: "admin",
  });


  console.log(data);
}

main();
