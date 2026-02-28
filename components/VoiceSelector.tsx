"use client";

import React from "react";
import { voiceCategories, voiceOptions, DEFAULT_VOICE } from "@/lib/constants";
import { VoiceSelectorProps } from "@/types";
import { cn } from "@/lib/utils";

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ value, onChange, disabled, className }) => {
  const current = value || DEFAULT_VOICE;

  const renderOption = (key: keyof typeof voiceOptions) => {
    const v = voiceOptions[key];
    const selected = current === key;

    return (
      <button
        key={key}
        type="button"
        className={cn(
          "voice-selector-option",
          selected ? "voice-selector-option-selected" : "voice-selector-option-default",
          disabled && "voice-selector-option-disabled"
        )}
        onClick={() => !disabled && onChange(key)}
        aria-pressed={selected}
      >
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[var(--text-primary)]">{v.name}</span>
          <span className="text-sm text-[var(--text-secondary)]">{v.description}</span>
        </div>
      </button>
    );
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="space-y-2">
        <p className="text-sm font-medium text-[var(--text-secondary)]">Male Voices</p>
        <div className="voice-selector-options">
          {voiceCategories.male.map((k) => renderOption(k as keyof typeof voiceOptions))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-[var(--text-secondary)]">Female Voices</p>
        <div className="voice-selector-options">
          {voiceCategories.female.map((k) => renderOption(k as keyof typeof voiceOptions))}
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;
