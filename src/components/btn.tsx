import React from "react";
import Link from 'next/link';

interface ButtonProps {
    type: "submit" | "button";
    className: string;
    children: React.ReactNode;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ type, className, children, href }) => {
    if (href) {
        return (
            <Link href={href}>
                <button type={type} className={className}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;