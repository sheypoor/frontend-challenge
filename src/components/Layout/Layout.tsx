import { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[680px] shadow-2xl p-6 rounded-xl">
        <p className="border-b pb-4 font-bold">Create user account</p>
        {children}
      </div>
    </div>
  );
};

export default Layout;
