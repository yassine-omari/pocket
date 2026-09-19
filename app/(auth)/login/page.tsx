import type { Metadata } from "next";
import Link from "next/link";
import Button from "../../components/Button";
import { TextField } from "../../components/Fields";

export const metadata: Metadata = {
  title: "Sign in - Pocket",
};

const Login = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
        Sign in to account
      </h1>
      <p className="mt-3 text-center text-lg text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-cyan-600">
          Sign up
        </Link>{" "}
        for a free trial.
      </p>
      <div className="-mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-[40px] sm:p-24">
        <form>
          <div className="space-y-6">
            <TextField
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <Button type="submit" color="cyan" className="mt-8 w-full">
            Sign in to account
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
