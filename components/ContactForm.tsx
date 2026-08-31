"use client";

import { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/actions/contact";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/site";
import {
  buildContactSchema,
  enquiryTypes,
  type ContactInput,
} from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "@/components/ui/field-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormValues = ContactInput;

const typeKeyByValue = {
  REGULAR: "regular",
  EMERGENCY: "emergency",
  BACKUP: "backup",
} as const;

function Optional({ label }: { label: string }) {
  return (
    <span className="text-muted-foreground text-xs font-normal">({label})</span>
  );
}

export function ContactForm({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  const copy = content.contact.form;
  const [reference, setReference] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(buildContactSchema(copy.errors)),
    defaultValues: {
      company: "",
      name: "",
      position: "",
      email: "",
      phone: "",
      origin: "",
      destination: "",
      material: "",
      frequency: "",
      temperature: "",
      enquiryType: "REGULAR",
      message: "",
      privacyAccepted: false as unknown as true,
      website: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const result = await submitEnquiry({ ...values, locale });

    if (result.success) {
      setReference(result.reference);
      return;
    }

    for (const [field, message] of Object.entries(result.errors)) {
      if (!message) continue;
      setError(field as keyof FormValues | "root", { message });
    }
  }

  if (reference) {
    return (
      <div className="border-success/30 bg-success-tint rounded-2xl border p-8">
        <CheckCircle2 className="text-success size-8" strokeWidth={1.75} />
        <h2 className="text-primary mt-4 text-2xl">{copy.success.title}</h2>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          {copy.success.body}
        </p>
        <p className="border-border bg-card mt-6 inline-flex items-baseline gap-2 rounded-lg border px-4 py-2.5">
          <span className="text-muted-foreground text-xs tracking-wider uppercase">
            {copy.success.referenceLabel}
          </span>
          <span className="text-primary font-display text-lg font-bold">
            {reference}
          </span>
        </p>
        <div className="mt-7">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setReference(null);
            }}
          >
            {copy.success.again}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Enquiry type first: it changes how the request is handled, and
          choosing "Notfall" is the most consequential thing on this page. */}
      <fieldset>
        <legend className="eyebrow text-accent mb-4">
          {copy.sections.enquiry}
        </legend>

        <Controller
          name="enquiryType"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid gap-3 sm:grid-cols-3"
            >
              {enquiryTypes.map((value) => {
                const option = copy.enquiryTypes[typeKeyByValue[value]];
                const isSelected = field.value === value;
                const isEmergency = value === "EMERGENCY";
                const id = `enquiryType-${value}`;

                return (
                  <Label
                    key={value}
                    htmlFor={id}
                    className={cn(
                      "block cursor-pointer rounded-xl border p-4 transition-colors",
                      isSelected
                        ? isEmergency
                          ? "border-accent bg-accent-tint"
                          : "border-primary bg-primary-tint"
                        : "border-border bg-card hover:border-primary/40",
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <RadioGroupItem
                        id={id}
                        value={value}
                        className={cn(isEmergency && "text-accent")}
                      />
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          isSelected && isEmergency
                            ? "text-accent-dark"
                            : "text-primary",
                        )}
                      >
                        {option.label}
                      </span>
                    </span>
                    <span className="text-muted-foreground mt-2 block text-xs leading-snug font-normal">
                      {option.description}
                    </span>
                  </Label>
                );
              })}
            </RadioGroup>
          )}
        />
        <FieldError message={errors.enquiryType?.message} />
      </fieldset>

      <Separator />

      {/* Contact details */}
      <fieldset>
        <legend className="eyebrow text-accent mb-4">
          {copy.sections.contact}
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="company" className="mb-1.5">
              {copy.fields.company}
            </Label>
            <Input
              id="company"
              autoComplete="organization"
              placeholder={copy.placeholders.company}
              aria-invalid={!!errors.company}
              {...register("company")}
            />
            <FieldError message={errors.company?.message} />
          </div>

          <div>
            <Label htmlFor="name" className="mb-1.5">
              {copy.fields.name}
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder={copy.placeholders.name}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            <FieldError message={errors.name?.message} />
          </div>

          <div>
            <Label htmlFor="position" className="mb-1.5">
              {copy.fields.position}
              <Optional label={copy.optional} />
            </Label>
            <Input
              id="position"
              autoComplete="organization-title"
              placeholder={copy.placeholders.position}
              {...register("position")}
            />
          </div>

          <div>
            <Label htmlFor="email" className="mb-1.5">
              {copy.fields.email}
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder={copy.placeholders.email}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>

          <div>
            <Label htmlFor="phone" className="mb-1.5">
              {copy.fields.phone}
              <Optional label={copy.optional} />
            </Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder={copy.placeholders.phone}
              {...register("phone")}
            />
          </div>
        </div>
      </fieldset>

      <Separator />

      {/* Transport details */}
      <fieldset>
        <legend className="eyebrow text-accent mb-4">
          {copy.sections.transport}
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="origin" className="mb-1.5">
              {copy.fields.origin}
            </Label>
            <Input
              id="origin"
              placeholder={copy.placeholders.origin}
              aria-invalid={!!errors.origin}
              {...register("origin")}
            />
            <FieldError message={errors.origin?.message} />
          </div>

          <div>
            <Label htmlFor="destination" className="mb-1.5">
              {copy.fields.destination}
            </Label>
            <Input
              id="destination"
              placeholder={copy.placeholders.destination}
              aria-invalid={!!errors.destination}
              {...register("destination")}
            />
            <FieldError message={errors.destination?.message} />
          </div>

          <div>
            <Label htmlFor="material" className="mb-1.5">
              {copy.fields.material}
            </Label>
            <Input
              id="material"
              placeholder={copy.placeholders.material}
              aria-invalid={!!errors.material}
              {...register("material")}
            />
            <FieldError message={errors.material?.message} />
          </div>

          <div>
            <Label htmlFor="frequency" className="mb-1.5">
              {copy.fields.frequency}
              <Optional label={copy.optional} />
            </Label>
            <Input
              id="frequency"
              placeholder={copy.placeholders.frequency}
              {...register("frequency")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="temperature" className="mb-1.5">
              {copy.fields.temperature}
              <Optional label={copy.optional} />
            </Label>
            <Input
              id="temperature"
              placeholder={copy.placeholders.temperature}
              {...register("temperature")}
            />
          </div>
        </div>
      </fieldset>

      <div>
        <Label htmlFor="message" className="mb-1.5">
          {copy.fields.message}
          <Optional label={copy.optional} />
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={copy.placeholders.message}
          {...register("message")}
        />
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <Controller
            name="privacyAccepted"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="privacyAccepted"
                checked={!!field.value}
                onCheckedChange={field.onChange}
                onBlur={field.onBlur}
                aria-invalid={!!errors.privacyAccepted}
                className="mt-0.5"
              />
            )}
          />
          <Label
            htmlFor="privacyAccepted"
            className="text-muted-foreground cursor-pointer text-sm leading-snug font-normal"
          >
            <span>
              {copy.privacyConsent.before}
              <Link
                href={href(locale, "privacy")}
                target="_blank"
                className="text-primary hover:text-primary-dark underline underline-offset-2"
              >
                {copy.privacyConsent.linkText}
              </Link>
              {copy.privacyConsent.after}
            </span>
          </Label>
        </div>
        <FieldError message={errors.privacyAccepted?.message} />
      </div>

      {errors.root ? (
        <p className="border-destructive/30 bg-destructive-tint text-destructive flex items-start gap-2.5 rounded-lg border px-4 py-3 text-sm">
          <AlertCircle className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
          {errors.root.message}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            {copy.submitting}
          </>
        ) : (
          <>
            {copy.submit}
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
