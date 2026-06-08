// src/libs/error/errorHandler.ts

import { toast } from "sonner";



type ErrorOptions = {
  showToast?: boolean;
  log?: boolean;
};

type ErrorWithMessage = {
  message?: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

export const handleError = (
  error: unknown,
  options: ErrorOptions = {
    showToast: true,
    log: true,
  }
) => {
  const message = isErrorWithMessage(error)
    ? error.message || "Something went wrong"
    : "Something went wrong";

  // console log
  if (options.log) {
    console.error("APP ERROR:", error);
  }

  // toast show
  if (options.showToast) {
    toast.error(message);
  }

  return message;
};