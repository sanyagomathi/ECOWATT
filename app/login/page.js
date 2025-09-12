"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-100 via-green-50 to-white">
      <Card className="w-full max-w-md shadow-lg border border-emerald-200 rounded-2xl">
        <CardHeader className="flex flex-col items-center space-y-2">
          <Leaf className="h-10 w-10 text-emerald-600" />
          <CardTitle className="text-2xl font-bold text-emerald-700">Welcome to Ecowatt</CardTitle>
          <p className="text-sm text-gray-500">Log in to track your energy usage 🌱</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-2">
          {message && (
            <p className={`text-sm ${message.includes("success") ? "text-emerald-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <p className="text-xs text-gray-500">Don’t have an account? <a href="#" className="text-emerald-600 hover:underline">Sign up</a></p>
        </CardFooter>
      </Card>
    </div>
  );
}
