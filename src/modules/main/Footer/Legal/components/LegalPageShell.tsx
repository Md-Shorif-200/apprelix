import Container from "@/components/common/Container";

type LegalPageShellProps = {
  children: React.ReactNode;
  className?: string;
};

const LegalPageShell = ({ children, className = "" }: LegalPageShellProps) => {
  return (
    <section
      className={`pt-14 pb-10 lg:pb-20 ds-section [content-visibility:auto] [contain-intrinsic-size:auto_800px] ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default LegalPageShell;
