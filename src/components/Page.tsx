import { FC, PropsWithChildren } from "react";

export const Page: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col justify-center items-center p-4 md:p-16">
    {children}
  </div>
);
