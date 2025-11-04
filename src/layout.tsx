interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <h1>Root</h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;