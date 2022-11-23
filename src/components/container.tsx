export const Container: React.FC<any> = ({ children }) => {
  return (
    <div className="container mx-auto 2xl:flex 2xl:justify-center ">
      {children}
    </div>
  );
};
