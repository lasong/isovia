import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-card text-foreground placeholder:text-muted-foreground/70 flex field-sizing-content min-h-28 w-full rounded-md border px-3.5 py-2.5 text-sm leading-relaxed transition-colors outline-none disabled:pointer-events-none disabled:opacity-60",
        "focus-visible:border-primary focus-visible:ring-ring/25 focus-visible:ring-[3px]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
