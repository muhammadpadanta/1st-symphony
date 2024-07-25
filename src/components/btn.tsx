import React from "react";
import Link from "next/link";

interface ButtonProps {
  type: "submit" | "button";
  className: string;
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  className,
  children,
  href,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <button type={type} className={className} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
