"use client";

import CustomInput from "@/components/inputs/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/auth.schema";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
};

const defaultValues: LoginFormData = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues,
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  async function onSubmit(data: LoginFormData) {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log(result);

      if (result?.error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Login successful");
      reset(defaultValues);
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <CustomInput
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          leftIcon={<Mail size={15} />}
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />

        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          leftIcon={<Lock size={15} />}
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-200 hover:bg-teal-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Submiting...
              </>
            ) : (
              <>
                Log In
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
