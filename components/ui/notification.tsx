"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const notificationVariants = cva(
  "relative w-full rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        success:
          "border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600 dark:border-green-800 dark:bg-green-950 dark:text-green-200 dark:[&>svg]:text-green-400",
        error:
          "border-red-200 bg-red-50 text-red-800 [&>svg]:text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-200 dark:[&>svg]:text-red-400",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200 dark:[&>svg]:text-yellow-400",
        info: "border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200 dark:[&>svg]:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const NotificationIcon = ({ variant }: { variant: string }) => {
  switch (variant) {
    case "success":
      return <CheckCircle className="h-4 w-4" />
    case "error":
      return <AlertCircle className="h-4 w-4" />
    case "warning":
      return <AlertTriangle className="h-4 w-4" />
    case "info":
      return <Info className="h-4 w-4" />
    default:
      return <Info className="h-4 w-4" />
  }
}

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title?: string
  description?: string
  onClose?: () => void
  showCloseButton?: boolean
  autoClose?: boolean
  autoCloseDelay?: number
  showSparkles?: boolean
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      className,
      variant = "default",
      title,
      description,
      onClose,
      showCloseButton = true,
      autoClose = false,
      autoCloseDelay = 5000,
      showSparkles = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(true)

    React.useEffect(() => {
      if (autoClose && autoCloseDelay > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          onClose?.()
        }, autoCloseDelay)

        return () => clearTimeout(timer)
      }
    }, [autoClose, autoCloseDelay, onClose])

    const handleClose = () => {
      setIsVisible(false)
      onClose?.()
    }

    if (!isVisible) return null

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={cn(
          notificationVariants({ variant }),
          "animate-in slide-in-from-top-2 fade-in-0 duration-300",
          className,
        )}
        {...props}
      >
        <NotificationIcon variant={variant || "default"} />
        {showSparkles && variant === "success" && (
          <Sparkles className="absolute right-8 top-4 h-4 w-4 text-green-600 dark:text-green-400 animate-pulse" />
        )}
        {showCloseButton && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 h-6 w-6 p-0 hover:bg-transparent opacity-70 hover:opacity-100 transition-opacity"
            onClick={handleClose}
            aria-label="Close notification"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        <div className="grid gap-1">
          {title && <div className="font-medium leading-none tracking-tight">{title}</div>}
          {description && <div className="text-sm opacity-90 leading-relaxed">{description}</div>}
          {children}
        </div>
      </div>
    )
  },
)
Notification.displayName = "Notification"

export { Notification, notificationVariants }
