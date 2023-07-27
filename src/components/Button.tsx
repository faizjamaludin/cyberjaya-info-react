import React, { ReactElement } from "react";

interface ButtonProps {
  label?: string;
  style?: string;
  onClick?: () => void | undefined;
  type?: "button" | "submit" | "reset";
  icon?: ReactElement;
}

export const PrimaryButton = ({
  label,
  onClick,
  type,
  style,
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style} text-sm font-normal text-white bg-primary border border-primary hover:translate-x-px hover:translate-y-px rounded-md px-4 py-2 shadow-lg`}
    >
      {icon}
      {label}
    </button>
  );
};

export const SecondaryButton = () => {};
