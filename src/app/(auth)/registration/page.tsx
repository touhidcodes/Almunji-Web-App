"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import FormContainer from "@/components/Forms/FormContainer";
import FormInput from "@/components/Forms/FormInput";
import Link from "next/link";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { registerValidationSchema } from "@/schema/authSchema";

// Mock functions - replace with your actual API calls
const userLogin = async (values: FieldValues) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (values.identifier && values.password) {
        resolve({
          data: { token: "mock-token" },
          message: "Login successful",
        });
      } else {
        resolve({
          message: "Invalid credentials",
        });
      }
    }, 1000);
  });
};

const userRegister = async (data: FieldValues) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.email && data.password && data.username) {
        resolve({
          data: { id: "mock-id" },
          message: "Registration successful",
          success: true,
        });
      } else {
        resolve({
          message: "Registration failed - Missing required fields",
          success: false,
        });
      }
    }, 1000);
  });
};

// Mock toast function - replace with your actual toast implementation
const toast = {
  success: (message: string) => {
    console.log("Success:", message);
    // You can replace this with your actual toast implementation
  },
  error: (message: string) => {
    console.log("Error:", message);
  },
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      setLoading(true);
      setError("");
      const res: any = await userLogin(values);

      if (res?.data?.token) {
        toast.success(res?.message);
        router.push("/");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: FieldValues) => {
    try {
      setLoading(true);
      setError("");
      const res: any = await userRegister(data);

      if (res?.data?.id && res?.success !== false) {
        toast.success(res.message);
        router.push("/");
      } else {
        setError(res?.message || "Registration failed!");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage =
          err.response?.data?.message || "Registration failed";
        setError(errorMessage);
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Almunji!
          <br />
          <span>Create your account</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Register to enjoy all features of Almunji
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded text-sm">
          {error}
        </div>
      )}

      <FormContainer
        onSubmit={handleRegister}
        resolver={zodResolver(registerValidationSchema)}
        defaultValues={{
          username: "",
          email: "",
          role: "",
          password: "",
        }}
      >
        <div className="space-y-4">
          <FormInput name="username" label="Username" type="text" required />
          <FormInput name="email" label="Email Address" type="email" required />
          <FormInput
            name="password"
            label="Password"
            type="password"
            required
          />
        </div>

        <div className="flex items-start text-xs text-gray-500 mt-3 mb-2">
          <input type="checkbox" className="mr-2 mt-0.5" required />
          <p>
            By registering, you agree to our{" "}
            <Link href="#" className="text-slate-800 underline font-semibold">
              Terms & Privacy Policy
            </Link>
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-slate-800 text-white hover:bg-slate-700"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Create Account"
          )}
        </Button>
      </FormContainer>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border-gray-300 hover:bg-gray-50"
          disabled={loading}
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border-gray-300 hover:bg-gray-50"
          disabled={loading}
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>

      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <button
          type="button"
          className="text-slate-800 underline cursor-pointer font-semibold"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default RegisterPage;
