"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "border border-input bg-muted",
        outline: "border border-input bg-transparent",
        bottomOutline: "border-b border-input bg-transparent rounded-none",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

const inputContentVariants = cva("flex-grow min-w-0 py-2 px-3", {
  variants: {
    variant: {
      solid: "",
      outline: "",
      bottomOutline: "px-0",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leadingElement?: React.ReactNode;
  trailingElement?: React.ReactNode;
  wrapperClassName?: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      className,
      variant,
      leadingElement,
      trailingElement,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(inputVariants({ variant }), wrapperClassName)}>
        {leadingElement && (
          <div className="flex items-center justify-center">
            {leadingElement}
          </div>
        )}
        <input
          className={cn(
            inputContentVariants({ variant }),
            "bg-transparent outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {trailingElement && (
          <div className="flex items-center justify-center">
            {trailingElement}
          </div>
        )}
      </div>
    );
  }
);
