import { cn } from "@/lib/utils"

/** Inline validation message beneath a form control. */
function FieldError({
  id,
  message,
  className,
}: {
  id?: string
  message?: string
  className?: string
}) {
  if (!message) return null

  return (
    <p
      id={id}
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive mt-1.5 text-xs", className)}
    >
      {message}
    </p>
  )
}

export { FieldError }
