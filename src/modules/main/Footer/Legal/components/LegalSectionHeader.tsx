import { LucideIcon } from "lucide-react";

interface LegalSectionHeaderProps {
  icon: LucideIcon;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

const LegalSectionHeader = ({
  icon: Icon,
  title,
  titleHighlight,
  subtitle,
}: LegalSectionHeaderProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ds-primary to-ds-primary/80 flex items-center justify-center shadow-md shadow-ds-primary/20 shrink-0">
          <Icon className="w-5 h-5 text-ds-primary-foreground" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-ds-text tracking-tight">
            {title}{" "}
            <span className="text-ds-primary">{titleHighlight}</span>
          </h2>
          <p className="text-sm text-ds-muted-foreground mt-0.5">{subtitle}</p>
        </div>

        <div className="ml-auto hidden sm:block h-px flex-1 max-w-xs bg-gradient-to-r from-ds-primary/20 to-transparent" />
      </div>
    </div>
  );
};

export default LegalSectionHeader;
