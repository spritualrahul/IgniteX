import { cn } from "@/lib/utils"
import * as React from "react"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card'
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "animate-pulse rounded-md bg-muted"
    const variantClasses = {
      default: "bg-gray-200",
      card: "rounded-xl bg-white border border-gray-200 shadow-sm",
    }
    
    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton }
