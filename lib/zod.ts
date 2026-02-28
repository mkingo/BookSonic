import z from 'zod'
import { ACCEPTED_PDF_TYPES, ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, MAX_IMAGE_SIZE, DEFAULT_VOICE } from './constants'

const isFileInstance = (val: unknown): val is File => typeof File !== 'undefined' && val instanceof File

export const UploadSchema = z.object({
  title: z.string().min(2, 'Title is too short').max(200, 'Title is too long'),
  author: z.string().min(2, 'Author name is too short').max(200, 'Author name is too long'),
  persona: z.string().default(DEFAULT_VOICE).refine((v) => typeof v === 'string' && v.length > 0, {
    message: 'Please choose a voice',
  }),
  pdfFile: z
    .any()
    .refine((file) => isFileInstance(file), 'Please upload a PDF file')
    .refine((file: File) => ACCEPTED_PDF_TYPES.includes(file.type), 'Only PDF files are accepted')
    .refine((file: File) => file.size <= MAX_FILE_SIZE, 'PDF must be 50MB or less'),
  coverImage: z
    .any()
    .optional()
    .refine(
      (file) => file === undefined || isFileInstance(file),
      'Invalid file'
    )
    .refine(
      (file: File | undefined) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      'Only JPG, PNG, or WEBP are accepted'
    )
    .refine((file: File | undefined) => !file || file.size <= MAX_IMAGE_SIZE, 'Image must be 10MB or less'),
})

export type UploadSchemaType = z.infer<typeof UploadSchema>
