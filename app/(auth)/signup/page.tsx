import type { Metadata } from "next";
import Link from "next/link";
import Button from "../../components/Button";
import { SelectField, TextField } from "../../components/Fields";

export const metadata: Metadata = {
  title: "Sign up - Pocket",
};

const Signup = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
        Sign up for an account
      </h1>
      <p className="mt-3 text-center text-lg text-gray-600">
        Already registered?{" "}
        <Link href="/login" className="text-cyan-600">
          Sign in
        </Link>{" "}
        to your account.
      </p>
      <div className="-mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-[40px] sm:p-24">
        <form>
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              className="col-span-full"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
            <SelectField
              className="col-span-full"
              label="How did you hear about us?"
              name="referral_source"
            >
              <option>AltaVista search</option>
              <option>Super Bowl commercial</option>
              <option>Our route 34 city bus ad</option>
              <option>The “Never Use This” podcast</option>
            </SelectField>
          </div>
          <Button type="submit" color="cyan" className="mt-8 w-full">
            Get started today
          </Button>
        </form>
      </div>
    </>
  );
};

export default Signup;
