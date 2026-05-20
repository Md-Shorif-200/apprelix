import { TriangleAlert } from "lucide-react";
import { toast } from "sonner";

type ConfirmationToastPayload = {
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  loadingMessage?: string;
  successMessage: string;
  errorMessage: string;
  onConfirm: () => Promise<unknown>;
  onSuccess?: () => void;
};

export const openConfirmationToast = (payload: ConfirmationToastPayload) => {
  const {
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    loadingMessage = "Please wait...",
    successMessage,
    errorMessage,
    onConfirm,
    onSuccess,
  } = payload;

  const handleConfirm = async (confirmationToastId?: string | number) => {
    if (confirmationToastId) {
      toast.dismiss(confirmationToastId);
    }

    const loadingToastId = toast.loading(loadingMessage);

    try {
      await onConfirm();
      toast.success(successMessage, { id: loadingToastId });
      onSuccess?.();
    } catch (err) {
      const fallbackErrorMessage = errorMessage;
      const errorText =
        err instanceof Error && err.message
          ? err.message
          : fallbackErrorMessage;

      // Replace the loading toast so no spinner remains active after failure.
      toast.error(errorText, { id: loadingToastId });
    }
  };

  toast.custom((id) => (
    <div className="w-[360px] overflow-hidden rounded-2xl border border-[#ffd78566] bg-[#081914] text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#ffd785] via-[#ffe4a0] to-[#b7814b]" />
      <div className="space-y-4 p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-[#ffd7851f] p-2 text-[#ffd785]">
            <TriangleAlert className="size-4" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold leading-5 text-[#fff7e5]">
              {title}
            </p>
            {description ? (
              <p className="text-xs leading-5 text-[#d1d1d1]">{description}</p>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => toast.dismiss(id)}
            className="rounded-lg border border-[#ffd7854d] bg-transparent px-3 py-2 text-xs font-semibold text-[#ffd785] transition hover:border-[#ffd785] hover:bg-[#ffd78514] cursor-pointer"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={() => void handleConfirm(id)}
            className="rounded-lg bg-[#ffd785] px-3 py-2 text-xs font-semibold text-[#081914] transition hover:bg-[#ffe4a0] cursor-pointer"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  ));
};

const ConfirmationToast = () => null;

export default ConfirmationToast;
