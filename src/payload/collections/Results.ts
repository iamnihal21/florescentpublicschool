// src/payload/collections/Results.ts
import type { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
  slug: 'results',
  admin: {
    useAsTitle: 'year',
  },
  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
      admin: { placeholder: 'e.g. 2023-2024' }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { placeholder: 'e.g. Outstanding Academic Excellence' }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { placeholder: 'e.g. College Acceptance Rate' }
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { placeholder: 'e.g. 100%' }
        },
      ],
    },
  ],
}