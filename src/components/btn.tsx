import React from "react";
import Link from 'next/link';

interface ButtonProps {
    type: "submit" | "button";
    className: string;
    children: React.ReactNode;
    href?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, disabled, className, children, href }) => {
    if (href) {
        return (
            <Link href={href}>
                <button type={type} className={className} >
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button type={type} className={className} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;