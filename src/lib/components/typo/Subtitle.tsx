import React, { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-3xl mb-7 font-italic">{children}</h2>;
};

export default Subtitle;
