type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 xl:px-0">{children}</div>
  );
};

export default Container;
