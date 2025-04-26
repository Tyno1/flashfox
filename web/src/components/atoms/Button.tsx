import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import clsx from "clsx";

import React from "react";

type ButttonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    fullWidth?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButttonProps>(
  ({ fullWidth, className, children, ...props }, ref) => {
    const baseStyles = "cursor-pointer"; //add more if needed
    return (
      <ShadcnButton
        ref={ref}
        className={clsx(fullWidth && "w-full", baseStyles, className)}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);
