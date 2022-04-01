import React from "react";
import { globalStyles } from "./styles";
import { Global } from "@emotion/react";
import { Seo } from "../seo";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    <Seo />
    <main className={className}>{children}</main>
  </React.Fragment>
);

export { Layout };
