"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	return (
		<Card className="max-w-md">
			<CardHeader>
				<CardTitle className="text-lg md:text-xl">Accedi</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-2">
					<div className="grid gap-2">
						<Label htmlFor="username">Username</Label>
						<Input
							id="username"
							placeholder="Username"
							required
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							value={username}
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
						</div>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="password"
							placeholder="Password"
						/>
					</div>

					<Button
						type="submit"
						className="w-full"
						disabled={loading}
						onClick={async () => {
							await signIn.username(
								{
									username: username,
									password: password,
								},
								{
									onRequest: () => {
										setLoading(true);
									},
									onResponse: () => {
										router.push("/");
										setLoading(false);
									},
									onError: (ctx) => {
										toast.error(ctx.error.message);
									},
								},
							);
						}}
					>
						{loading ? <Loader2 size={16} className="animate-spin" /> : "Accedi"}
					</Button>
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex w-full justify-center border-t py-4">
					<p className="text-center text-xs text-neutral-500">
						versione beta, <span className="text-orange-400">potrebbero</span> esserci problemi
					</p>
				</div>
			</CardFooter>
		</Card>
	);
}
