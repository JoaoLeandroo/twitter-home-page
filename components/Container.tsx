interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto px-5 md:px-20 xl:px-28 lg:px-36 relative">
      {children}
    </div>
  );
};

export default Container;
