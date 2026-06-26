"use client";

import { Check } from "lucide-react";

const STEPS = [
  { label: "Product details", subtitle: "What you need" },
  { label: "Business & logistics", subtitle: "Budget & delivery" },
  { label: "Upload & submit", subtitle: "Files & publish" },
];

type StepIndicatorProps = {
  currentStep: number;
};

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center w-full">
      {STEPS.map((step, index) => {
        const stepNumber = index + 1;
        const isDone = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;
        const isLast = index === STEPS.length - 1;

        return (
          <div
            key={stepNumber}
            className={`flex items-center ${!isLast ? "flex-1" : ""}`}
          >
            <div className="flex items-center gap-3 shrink-0">
              {/* Step Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  text-sm font-semibold border-2 transition-all duration-300
                  ${isDone ? "bg-white text-teal-600 border-white" : ""}
                  ${
                    isActive
                      ? "bg-white text-teal-600 border-white shadow-lg"
                      : ""
                  }
                  ${
                    !isDone && !isActive
                      ? "bg-white/10 text-white border-white/30"
                      : ""
                  }
                `}
              >
                {isDone ? <Check size={16} strokeWidth={2.5} /> : stepNumber}
              </div>

              {/* Label */}
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isActive || isDone ? "text-white" : "text-teal-100"
                  }`}
                >
                  {step.label}
                </p>

                <p
                  className={`text-xs ${
                    isActive || isDone ? "text-teal-50" : "text-teal-200"
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>
            </div>

            {!isLast && (
              <div className="flex-1 mx-5 h-[2px] relative">
                <div className="absolute inset-0 bg-white/20 rounded-full" />

                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-500"
                  style={{
                    width: isDone ? "100%" : "0%",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
