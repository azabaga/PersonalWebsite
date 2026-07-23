import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styles from "../styles/action-link.module.css";

type ActionLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "ghost";
  }
>;

export function ActionLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`${styles.link} ${styles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
