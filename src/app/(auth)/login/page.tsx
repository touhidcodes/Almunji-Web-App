"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import FormContainer from "@/components/Forms/FormContainer";
import FormInput from "@/components/Forms/FormInput";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { loginValidationSchema } from "@/schema/authSchema";

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
      if (data.email && data.password) {
        resolve({
          data: { id: "mock-id" },
          message: "Registration successful",
          success: true,
        });
      } else {
        resolve({
          message: "Registration failed",
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

interface LoginPageProps {
  isLogin?: boolean;
  setIsLogin?: (value: boolean) => void;
  onTestLogin?: (role: "admin" | "user") => void;
  toggle?: () => void;
}

const LoginPage = ({
  isLogin = true,
  setIsLogin = () => {},
  onTestLogin,
  toggle = () => {},
}: LoginPageProps) => {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [api, setApi] = useState<any>(null); // Replace with proper type
  const router = useRouter();

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const toggleForm = () => {
    const newType = isLogin ? "register" : "login";
    router.replace(`/auth?type=${newType}`);
    setIsLogin(!isLogin);
    setError("");
  };

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

  const handleTestLogin = async (role: "admin" | "user") => {
    const credentials =
      role === "admin"
        ? {
            identifier:
              process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com",
            password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123",
          }
        : {
            identifier:
              process.env.NEXT_PUBLIC_USER_EMAIL || "user@example.com",
            password: process.env.NEXT_PUBLIC_USER_PASSWORD || "user123",
          };

    await handleLogin(credentials);
  };

  const defaultTestLogin = onTestLogin || handleTestLogin;

  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Back to Almunji!
          <br />
          <span>Your Living Solutions</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">Sign in to your account</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded text-sm">
          {error}
        </div>
      )}

      <FormContainer
        onSubmit={handleLogin}
        resolver={zodResolver(loginValidationSchema)}
        defaultValues={{ identifier: "", password: "" }}
      >
        <div className="space-y-4">
          <FormInput
            name="identifier"
            label="Your Email or Username"
            type="text"
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            required
          />
        </div>

        <div className="flex items-center justify-between mt-3 mb-2 space-x-6">
          <div className="flex items-center text-xs text-gray-500">
            <input type="checkbox" className="mr-2" />
            <p>Remember Me</p>
          </div>
          <Link
            href="#"
            className="text-xs text-slate-800 underline cursor-pointer font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-slate-800 text-white hover:bg-slate-700"
          disabled={loading}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Login"}
        </Button>
      </FormContainer>

      <div className="flex justify-between gap-2">
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 hover:bg-slate-800 hover:text-white hover:border-white rounded-full px-6 py-2 font-medium transition-all duration-200 group"
          onClick={() => defaultTestLogin("user")}
          disabled={loading}
        >
          User Login
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 hover:bg-slate-800 hover:text-white hover:border-white rounded-full px-6 py-2 font-medium transition-all duration-200 group"
          onClick={() => defaultTestLogin("admin")}
          disabled={loading}
        >
          Admin Login
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>

      <p className="text-sm text-center mt-3">
        Don&apos;t have any account?{" "}
        <button
          type="button"
          onClick={toggle}
          className="text-slate-800 underline cursor-pointer font-semibold"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
