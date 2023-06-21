import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = (props: ButtonProps) => {
  const Component = props.asChild ? Slot : "button";

  return (
    <Component
      className="px-4 h-10 rounded bg-violet-600 text-white font-bold flex items-center justify-center"
      {...props}
    />
  );
};
