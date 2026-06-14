type FormInputSectionTitleProps = {
  step: number;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function FormInputSectionTitle({
  step,
  title,
  subtitle,
  className = "",
}: FormInputSectionTitleProps) {
  return (
    <div className={`mb-5 flex items-start gap-3 ${className}`}>
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-xs font-bold text-white">
        {step}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
}
