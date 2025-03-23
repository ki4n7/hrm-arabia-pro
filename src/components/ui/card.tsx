
import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "subtle" | "gradient" | "primary" | "success" | "warning" | "info" | "bordered";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClassNames = {
      default: "rounded-lg border bg-card text-card-foreground shadow-sm",
      outline: "rounded-lg border-2 bg-transparent text-card-foreground",
      subtle: "rounded-lg bg-muted/50 text-card-foreground",
      gradient: "rounded-lg border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      primary: "rounded-lg border-0 bg-hrm-blue text-white",
      success: "rounded-lg border border-green-200 bg-green-50 text-green-700",
      warning: "rounded-lg border border-amber-200 bg-amber-50 text-amber-700",
      info: "rounded-lg border border-blue-200 bg-blue-50 text-blue-700",
      bordered: "rounded-lg border-2 border-primary/20 bg-card text-card-foreground hover:border-primary/50 transition-all duration-200",
    };

    return (
      <div
        ref={ref}
        className={cn(variantClassNames[variant], className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      withBorder && "border-b",
      className
    )}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0", 
      withBorder && "border-t mt-4 pt-4",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
