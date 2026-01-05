import { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
  slug: 'results',
  admin: { useAsTitle: 'year', group: 'Achievements' },
  fields: [
    { name: 'year', type: 'text', required: true },
    { name: 'percentage', type: 'text', required: true },
    { name: 'description', type: 'text' },
    { name: 'category', type: 'select', options: ['SSC', 'HSC'], required: true },
  ],
}