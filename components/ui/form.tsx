import * as React from "react"
import { Controller, FormProvider } from "react-hook-form"

import { cn } from "@/lib/utils"

const Form = FormProvider

const FormField = Controller

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>["ref"],
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref as any}
    className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
)) as unknown as React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> & { displayName?: string }
;(FormLabel as any).displayName = "FormLabel"

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
FormControl.displayName = "FormControl"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-red-600", className)} {...props} />
))
FormMessage.displayName = "FormMessage"

export { Form, FormItem, FormLabel as FormLabel, FormControl, FormMessage, FormField }
