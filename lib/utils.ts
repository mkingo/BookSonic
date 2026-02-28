import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple placeholder PDF parser for development.
// In production, replace with real PDF parsing.
export async function parsePDFFile(file: File | undefined): Promise<{ content: string[]; cover: string }> {
  if (!file) {
    return { content: [], cover: "/assets/open-book.svg" }
  }
  // We cannot parse PDF here; return a stub with a single segment.
  const name = file.name?.replace(/\.[^.]+$/, "") || "uploaded-book";
  return {
    content: [
      `This is a placeholder segment for ${name}. Replace parsePDFFile with a real PDF parser to extract content.`,
    ],
    cover: "/assets/open-book.svg",
  }
}
