"use client";

import React from "react";
import { Control, Controller } from "react-hook-form";
import { LucideIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props<T> {
  control: Control<T>;
  name: any;
  label: string;
  acceptTypes: string[];
  disabled?: boolean;
  icon: LucideIcon;
  placeholder: string;
  hint: string;
}

function bytesToMB(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(1);
}

const FileUploader = <T extends object>({ control, name, label, acceptTypes, disabled, icon: Icon, placeholder, hint }: Props<T>) => {
  const inputId = `${String(name)}-input`;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const file = field.value as File | undefined;
        const hasFile = !!file;

        return (
          <div className="space-y-3">
            <label htmlFor={inputId} className="form-label">{label}</label>
            <div
              className={cn(
                "upload-dropzone border border-dashed border-[var(--border-subtle)]",
                hasFile && "upload-dropzone-uploaded",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !disabled && document.getElementById(inputId)?.click()}
            >
              <input
                id={inputId}
                type="file"
                accept={acceptTypes.join(",")}
                className="hidden"
                disabled={disabled}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) field.onChange(f);
                }}
              />

              {!hasFile ? (
                <div className="file-upload-shadow text-center">
                  <Icon className="upload-dropzone-icon" />
                  <p className="upload-dropzone-text">{placeholder}</p>
                  <p className="upload-dropzone-hint">{hint}</p>
                </div>
              ) : (
                <div className="file-upload-shadow w-full text-center">
                  <p className="upload-dropzone-text">{file.name} <span className="text-sm text-[#8B7355]">({bytesToMB(file.size)} MB)</span></p>
                  <button
                    type="button"
                    className="upload-dropzone-remove absolute top-3 right-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      field.onChange(undefined);
                    }}
                    aria-label="Remove file"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              )}
            </div>
            {fieldState.error && (
              <p className="text-sm text-red-600">{fieldState.error.message as string}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default FileUploader;
