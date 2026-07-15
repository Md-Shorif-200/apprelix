"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Loader2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ConfirmationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  loadingMessage?: string;
  errorMessage: string;
  variant?: "destructive" | "default";
  onConfirm: () => Promise<unknown>;
  onSuccess?: () => void;
};

const ConfirmationModal = ({
  open,
  onOpenChange,
  title,
  description,
  loadingMessage = "Please wait...",
  errorMessage,
  variant = "destructive",
  onConfirm,
  onSuccess,
}: ConfirmationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetState = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (isLoading) return;
    if (!nextOpen) {
      resetState();
    }
    onOpenChange(nextOpen);
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await onConfirm();
      resetState();
      onOpenChange(false);
      onSuccess?.();
    } catch (err) {
      const errorText =
        err instanceof Error && err.message ? err.message : errorMessage;
      setError(errorText);
    } finally {
      setIsLoading(false);
    }
  };

  const isDestructive = variant === "destructive";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={!isLoading}
        className="max-w-md gap-0 overflow-hidden rounded-2xl border border-gray-100 bg-white! p-0 shadow-2xl ring-0 dark:border-zinc-800 dark:bg-zinc-900!"
      >
        <div className="relative isolate bg-white dark:bg-zinc-900">
          <DialogHeader className="space-y-0 px-6 pt-6 pb-4 text-left">
            <div className="flex items-start gap-3.5">
              <div
                className={cn(
                  "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full",
                  isDestructive
                    ? "bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400"
                    : "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
                )}
              >
                <AlertTriangle className="size-5" strokeWidth={2.25} />
              </div>

              <div className="min-w-0 flex-1 space-y-1.5">
                <DialogTitle className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
                  {title}
                </DialogTitle>
                {description ? (
                  <DialogDescription className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {description}
                  </DialogDescription>
                ) : null}
              </div>
            </div>

            {error ? (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                {error}
              </div>
            ) : null}
          </DialogHeader>

          <DialogFooter className="mx-0 mb-0 flex flex-row items-center justify-end gap-2.5 rounded-b-2xl border-t border-gray-100 bg-gray-50/80 px-6 py-4 dark:border-gray-800 dark:bg-gray-900/40">
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              onClick={() => handleOpenChange(false)}
              className={cn(
                "min-w-24 cursor-pointer gap-1.5 border-gray-200 bg-white text-gray-700",
                "transition-all duration-200 ease-out",
                "hover:-translate-y-px hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm",
                "active:translate-y-0 active:scale-[0.98]",
                "focus-visible:ring-2 focus-visible:ring-gray-200",
                "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
                "dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
              )}
            >
              <X className="size-3.5" strokeWidth={2.25} />
              Close
            </Button>
            <Button
              type="button"
              disabled={isLoading}
              onClick={() => void handleConfirm()}
              className={cn(
                "min-w-24 cursor-pointer gap-1.5 text-white shadow-sm",
                "transition-all duration-200 ease-out",
                "hover:-translate-y-px hover:shadow-md",
                "active:translate-y-0 active:scale-[0.98]",
                isDestructive
                  ? "bg-red-500 hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-500/30"
                  : "bg-teal-500 hover:bg-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500/30",
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" />
                  {loadingMessage}
                </>
              ) : (
                <>
                  <CheckCircle className="size-3.5" strokeWidth={2.5} />
                  Confirm
                </>
              )}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
