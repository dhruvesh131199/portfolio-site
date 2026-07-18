import type { ReactNode } from "react";
import { Copyright } from "./Copyright";
import { HomeMark } from "./HomeMark";
import { SocialRail } from "./SocialRail";
import "./PageShell.css";

type PageShellProps = {
  children: ReactNode;
  showHome?: boolean;
  className?: string;
};

export function PageShell({
  children,
  showHome = true,
  className = "",
}: PageShellProps) {
  return (
    <div className={`page-shell ${className}`.trim()}>
      <SocialRail />
      {showHome && <HomeMark />}
      <Copyright />
      <main className="page-shell__main">{children}</main>
    </div>
  );
}
