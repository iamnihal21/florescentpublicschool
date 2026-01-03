import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home-page',
  fields: [
    {
      name: 'heroSlides',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'highlightWord', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'scrollCards',
      label: 'Scroll Content (4 Cards)',
      type: 'array',
      maxRows: 4,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'buttonText', type: 'text' },
      ],
    },
    {
        name: 'resultsHighlight',
        type: 'array',
        fields: [
            { name: 'year', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'stats', type: 'array', fields: [
                { name: 'label', type: 'text' },
                { name: 'value', type: 'text' }
            ]}
        ]
    }
  ],
}